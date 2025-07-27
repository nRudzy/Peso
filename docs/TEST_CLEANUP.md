# Nettoyage de Base de Données pour les Tests

Ce document explique les différentes stratégies de nettoyage de base de données pour les tests et comment les utiliser.

## 🎯 Problème

Les tests laissent des déchets en base de données car :
- Les données créées par les factories persistent entre les tests
- La base de données SQLite en mémoire est partagée
- Le nettoyage manuel n'est pas fiable

## 🧹 Solutions Implémentées

### 1. Nettoyage Automatique (Recommandé)

**Fichier**: `app/tests/conftest.py`

```python
@pytest.fixture(autouse=True)
def clean_database():
    """Clean database before each test"""
    with engine.begin() as conn:
        # Disable foreign key constraints for SQLite
        conn.execute("PRAGMA foreign_keys=OFF")
        
        # Get all table names
        tables = Base.metadata.tables.keys()
        
        # Delete all data from all tables
        for table_name in tables:
            conn.execute(f"DELETE FROM {table_name}")
        
        # Reset auto-increment counters
        for table_name in tables:
            conn.execute(f"DELETE FROM sqlite_sequence WHERE name='{table_name}'")
        
        # Re-enable foreign key constraints
        conn.execute("PRAGMA foreign_keys=ON")
    
    yield
```

**Avantages**:
- ✅ Nettoyage automatique avant chaque test
- ✅ Réinitialise les compteurs auto-increment
- ✅ Gère les contraintes de clés étrangères
- ✅ Simple à utiliser

**Utilisation**:
```bash
pytest app/tests/
```

### 2. Base de Données Persistante

**Fichier**: `app/tests/conftest_improved.py`

```python
@pytest.fixture(scope="session")
def test_db_path():
    """Create a temporary database file for testing"""
    with tempfile.NamedTemporaryFile(suffix=".db", delete=False) as tmp:
        return tmp.name
```

**Avantages**:
- ✅ Base de données persistante entre les sessions
- ✅ Meilleure isolation des tests
- ✅ Plus facile à déboguer

**Utilisation**:
```bash
pytest app/tests/ --confcutdir=app/tests -c app/tests/conftest_improved.py
```

### 3. Transactions avec Rollback

**Fichier**: `app/tests/conftest_transactional.py`

```python
@pytest.fixture(autouse=True)
def db_transaction():
    """Use database transaction for automatic rollback after each test"""
    connection = engine.connect()
    transaction = connection.begin()
    # ... setup transaction
    yield db_session
    # ... rollback transaction
```

**Avantages**:
- ✅ Rollback automatique après chaque test
- ✅ Performance optimale
- ✅ Isolation parfaite des tests

**Utilisation**:
```bash
pytest app/tests/ --confcutdir=app/tests -c app/tests/conftest_transactional.py
```

## 🧪 Tests de Nettoyage

**Fichier**: `app/tests/test_cleanup.py`

Ce fichier contient des tests spécifiques pour vérifier que le nettoyage fonctionne correctement :

```python
class TestDatabaseCleanup:
    def test_cleanup_between_tests(self, db_session: Session):
        # Create test data
        user = UserFactory()
        # Verify data exists
        assert db_session.query(User).count() == 1
    
    def test_cleanup_verification(self, db_session: Session):
        # Should start with clean database
        user_count = db_session.query(User).count()
        assert user_count == 0
```

## 🛠️ Scripts Utilitaires

### Script de Nettoyage Manuel

**Fichier**: `scripts/clean_test_db.py`

```bash
python scripts/clean_test_db.py
```

### Configuration Pytest

**Fichier**: `pytest.ini`

```ini
[tool:pytest]
testpaths = app/tests
addopts = 
    -v
    --tb=short
    --strict-markers
    --disable-warnings
    --color=yes
```

## 📊 Comparaison des Solutions

| Solution | Performance | Fiabilité | Complexité | Recommandation |
|----------|-------------|-----------|------------|----------------|
| Nettoyage Automatique | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ✅ Recommandé |
| Base Persistante | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Alternative |
| Transactions | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Avancé |

## 🚀 Utilisation Recommandée

### Pour le Développement Quotidien

Utilisez le nettoyage automatique (solution 1) :

```bash
# Lancer tous les tests
pytest app/tests/

# Lancer un test spécifique
pytest app/tests/test_users.py::TestUserEndpoints::test_get_current_user_profile

# Lancer avec couverture
pytest app/tests/ --cov=app --cov-report=html
```

### Pour les Tests d'Intégration

Utilisez les transactions (solution 3) :

```bash
pytest app/tests/test_integration.py --confcutdir=app/tests -c app/tests/conftest_transactional.py
```

### Pour le Débogage

Utilisez la base persistante (solution 2) :

```bash
pytest app/tests/ --confcutdir=app/tests -c app/tests/conftest_improved.py -s
```

## 🔧 Dépannage

### Problème : Tests qui échouent aléatoirement

**Cause**: Données persistantes entre les tests
**Solution**: Vérifiez que le fixture `clean_database` est bien `autouse=True`

### Problème : Erreurs de contraintes de clés étrangères

**Cause**: Ordre de suppression incorrect
**Solution**: Utilisez le nettoyage automatique qui désactive les contraintes

### Problème : Tests lents

**Cause**: Nettoyage manuel de chaque table
**Solution**: Utilisez les transactions pour un rollback automatique

## 📝 Notes Importantes

1. **Toujours utiliser `autouse=True`** pour les fixtures de nettoyage
2. **Tester le nettoyage** avec `test_cleanup.py`
3. **Vérifier l'isolation** entre les tests
4. **Utiliser les factories** pour créer des données de test cohérentes

## 🎯 Résultat Attendu

Après implémentation, chaque test devrait :
- ✅ Commencer avec une base de données propre
- ✅ Pouvoir créer ses propres données de test
- ✅ Ne pas affecter les autres tests
- ✅ Se terminer sans laisser de déchets 