from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, HTMLResponse
from contextlib import asynccontextmanager
import json
from datetime import datetime

from app.core.config import settings
from app.core.database import engine
from app.models import Base
from app.routes import auth, users, weight_entries


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    Base.metadata.create_all(bind=engine)
    yield
    # Shutdown
    pass


# Create FastAPI application
app = FastAPI(
    title="Peso - Weight Tracking API",
    description="API REST pour le suivi de perte de poids",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_HOSTS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/v1", tags=["Authentication"])
app.include_router(users.router, prefix="/api/v1", tags=["Users"])
app.include_router(weight_entries.router, prefix="/api/v1", tags=["Weight Entries"])


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Peso API - Weight Tracking Application",
        "version": "1.0.0",
        "docs": "/docs",
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "peso-api"}


@app.get("/export/swagger-collection")
async def export_swagger_collection():
    """Export Swagger documentation as a ready-to-use Postman collection"""

    # Get OpenAPI schema
    openapi_schema = app.openapi()

    # Create Postman collection structure
    collection = {
        "info": {
            "name": "Peso API - Weight Tracking Collection",
            "description": "Collection complète pour tester l'API Peso de suivi de poids",
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
            "version": "1.0.0",
            "exported_at": datetime.now().isoformat(),
        },
        "variable": [
            {"key": "base_url", "value": "http://localhost:8000", "type": "string"},
            {"key": "auth_token", "value": "", "type": "string"},
        ],
        "auth": {
            "type": "bearer",
            "bearer": [{"key": "token", "value": "{{auth_token}}", "type": "string"}],
        },
        "item": [],
    }

    # Process each path and method
    processed_endpoints = set()  # To avoid duplicates

    for path, path_data in openapi_schema["paths"].items():
        for method, method_data in path_data.items():
            if method.upper() in ["GET", "POST", "PUT", "DELETE", "PATCH"]:
                # Create unique identifier for this endpoint
                endpoint_id = f"{method.upper()}_{path}"

                # Skip if already processed
                if endpoint_id in processed_endpoints:
                    continue

                processed_endpoints.add(endpoint_id)

                # Create request item
                item = {
                    "name": method_data.get("summary", f"{method.upper()} {path}"),
                    "request": {
                        "method": method.upper(),
                        "header": [
                            {"key": "Content-Type", "value": "application/json"}
                        ],
                        "url": {
                            "raw": "{{base_url}}" + path,
                            "host": ["{{base_url}}"],
                            "path": path.strip("/").split("/"),
                        },
                    },
                    "response": [],
                }

                # Add request body for POST/PUT/PATCH
                if (
                    method.upper() in ["POST", "PUT", "PATCH"]
                    and "requestBody" in method_data
                ):
                    content = method_data["requestBody"].get("content", {})
                    if "application/json" in content:
                        schema = content["application/json"].get("schema", {})
                        if "properties" in schema:
                            example_body = {}
                            for prop_name, prop_data in schema["properties"].items():
                                if "example" in prop_data:
                                    example_body[prop_name] = prop_data["example"]
                                elif prop_data.get("type") == "string":
                                    example_body[prop_name] = "example_value"
                                elif prop_data.get("type") == "number":
                                    example_body[prop_name] = 0
                                elif prop_data.get("type") == "boolean":
                                    example_body[prop_name] = False

                            if example_body:
                                item["request"]["body"] = {
                                    "mode": "raw",
                                    "raw": json.dumps(example_body, indent=2),
                                    "options": {"raw": {"language": "json"}},
                                }

                # Add query parameters for GET requests
                if method.upper() == "GET" and "parameters" in method_data:
                    query_params = []
                    for param in method_data["parameters"]:
                        if param.get("in") == "query":
                            query_params.append(
                                {
                                    "key": param["name"],
                                    "value": param.get("example", ""),
                                    "description": param.get("description", ""),
                                }
                            )
                    if query_params:
                        item["request"]["url"]["query"] = query_params

                # Add path parameters
                if "parameters" in method_data:
                    path_params = []
                    for param in method_data["parameters"]:
                        if param.get("in") == "path":
                            path_params.append(
                                {
                                    "key": param["name"],
                                    "value": param.get("example", "1"),
                                    "description": param.get("description", ""),
                                }
                            )
                    if path_params:
                        item["request"]["url"]["variable"] = path_params

                # Add description
                if "description" in method_data:
                    item["description"] = method_data["description"]

                # Add tags for organization
                if "tags" in method_data:
                    item["tag"] = method_data["tags"]

                collection["item"].append(item)

    # Group items by tags
    grouped_items = {}
    for item in collection["item"]:
        tags = item.get("tag", ["Other"])
        # Use the first tag to avoid duplicates
        primary_tag = tags[0] if tags else "Other"
        if primary_tag not in grouped_items:
            grouped_items[primary_tag] = []
        grouped_items[primary_tag].append(item)

    # Reorganize collection with folders
    collection["item"] = []
    for tag, items in grouped_items.items():
        folder = {"name": tag, "item": items}
        collection["item"].append(folder)

    return JSONResponse(
        content=collection,
        headers={
            "Content-Disposition": "attachment; filename=peso-api-collection.json"
        },
    )


@app.get("/docs/custom", response_class=HTMLResponse)
async def custom_documentation():
    """Custom documentation page with export button"""

    html_content = """
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Peso API - Documentation</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
            }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            
            .header {
                text-align: center;
                color: white;
                margin-bottom: 40px;
            }
            
            .header h1 {
                font-size: 3rem;
                margin-bottom: 10px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            
            .header p {
                font-size: 1.2rem;
                opacity: 0.9;
            }
            
            .content {
                background: white;
                border-radius: 15px;
                padding: 40px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                margin-bottom: 30px;
            }
            
            .section {
                margin-bottom: 40px;
            }
            
            .section h2 {
                color: #667eea;
                font-size: 2rem;
                margin-bottom: 20px;
                border-bottom: 3px solid #667eea;
                padding-bottom: 10px;
            }
            
            .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin-bottom: 30px;
            }
            
            .feature-card {
                background: #f8f9fa;
                padding: 25px;
                border-radius: 10px;
                border-left: 4px solid #667eea;
                transition: transform 0.3s ease;
            }
            
            .feature-card:hover {
                transform: translateY(-5px);
            }
            
            .feature-card h3 {
                color: #667eea;
                margin-bottom: 10px;
            }
            
            .export-section {
                text-align: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px;
                border-radius: 15px;
                margin-bottom: 30px;
            }
            
            .export-section h2 {
                color: white;
                border-bottom: 3px solid white;
                margin-bottom: 20px;
            }
            
            .btn {
                display: inline-block;
                padding: 15px 30px;
                background: #28a745;
                color: white;
                text-decoration: none;
                border-radius: 50px;
                font-weight: bold;
                font-size: 1.1rem;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                margin: 10px;
            }
            
            .btn:hover {
                background: #218838;
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
            
            .btn-secondary {
                background: #6c757d;
            }
            
            .btn-secondary:hover {
                background: #545b62;
            }
            
            .endpoints {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 10px;
                margin-top: 20px;
            }
            
            .endpoint {
                background: white;
                padding: 15px;
                margin: 10px 0;
                border-radius: 8px;
                border-left: 4px solid #28a745;
            }
            
            .endpoint .method {
                font-weight: bold;
                color: #28a745;
            }
            
            .endpoint .path {
                font-family: monospace;
                background: #e9ecef;
                padding: 2px 6px;
                border-radius: 4px;
            }
            
            .architecture {
                background: #f8f9fa;
                padding: 25px;
                border-radius: 10px;
                margin-top: 20px;
            }
            
            .tech-stack {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-top: 20px;
            }
            
            .tech-item {
                background: white;
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                border: 2px solid #667eea;
            }
            
            .tech-item strong {
                color: #667eea;
            }
            
            @media (max-width: 768px) {
                .header h1 {
                    font-size: 2rem;
                }
                
                .content {
                    padding: 20px;
                }
                
                .features {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏋️ Peso API</h1>
                <p>API REST moderne pour le suivi de perte de poids</p>
            </div>
            
            <div class="content">
                <div class="section">
                    <h2>🚀 Fonctionnalités Principales</h2>
                    <div class="features">
                        <div class="feature-card">
                            <h3>🔐 Authentification JWT</h3>
                            <p>Inscription, connexion, vérification email et réinitialisation de mot de passe sécurisées</p>
                        </div>
                        <div class="feature-card">
                            <h3>👤 Gestion des Utilisateurs</h3>
                            <p>Profils personnalisables avec unités configurables et visibilité publique/privée</p>
                        </div>
                        <div class="feature-card">
                            <h3>⚖️ Suivi de Poids</h3>
                            <p>Entrées de poids avec historique, statistiques et calculs automatiques d'IMC</p>
                        </div>
                        <div class="feature-card">
                            <h3>📊 Statistiques Avancées</h3>
                            <p>Progression, objectifs, filtrage par période et analyses détaillées</p>
                        </div>
                    </div>
                </div>
                
                <div class="export-section">
                    <h2>📥 Export Collection Swagger</h2>
                    <p>Générez une collection Postman prête à l'emploi pour tester toutes les fonctionnalités de l'API</p>
                    <a href="/export/swagger-collection" class="btn" download="peso-api-collection.json">
                        📥 Télécharger Collection Postman
                    </a>
                    <br>
                    <a href="/docs" class="btn btn-secondary" target="_blank">
                        📚 Documentation Swagger Interactive
                    </a>
                    <a href="/redoc" class="btn btn-secondary" target="_blank">
                        📖 Documentation ReDoc
                    </a>
                </div>
                
                <div class="section">
                    <h2>🏗️ Architecture Technique</h2>
                    <div class="architecture">
                        <h3>Stack Technologique</h3>
                        <div class="tech-stack">
                            <div class="tech-item">
                                <strong>Backend</strong><br>
                                FastAPI (Python 3.11)
                            </div>
                            <div class="tech-item">
                                <strong>Base de Données</strong><br>
                                PostgreSQL 15
                            </div>
                            <div class="tech-item">
                                <strong>ORM</strong><br>
                                SQLAlchemy 2.0
                            </div>
                            <div class="tech-item">
                                <strong>Authentification</strong><br>
                                JWT + bcrypt
                            </div>
                            <div class="tech-item">
                                <strong>Migrations</strong><br>
                                Alembic
                            </div>
                            <div class="tech-item">
                                <strong>Tests</strong><br>
                                Pytest
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="section">
                    <h2>🔗 Endpoints Principaux</h2>
                    <div class="endpoints">
                        <div class="endpoint">
                            <span class="method">POST</span> <span class="path">/api/v1/auth/register</span> - Inscription utilisateur
                        </div>
                        <div class="endpoint">
                            <span class="method">POST</span> <span class="path">/api/v1/auth/login</span> - Connexion
                        </div>
                        <div class="endpoint">
                            <span class="method">GET</span> <span class="path">/api/v1/users/me</span> - Profil utilisateur
                        </div>
                        <div class="endpoint">
                            <span class="method">POST</span> <span class="path">/api/v1/weight-entries</span> - Créer entrée de poids
                        </div>
                        <div class="endpoint">
                            <span class="method">GET</span> <span class="path">/api/v1/weight-entries</span> - Liste des entrées
                        </div>
                        <div class="endpoint">
                            <span class="method">GET</span> <span class="path">/api/v1/weight-entries/statistics</span> - Statistiques
                        </div>
                    </div>
                </div>
                
                <div class="section">
                    <h2>🐳 Démarrage Rapide</h2>
                    <div class="architecture">
                        <h3>1. Cloner et configurer</h3>
                        <pre style="background: #e9ecef; padding: 15px; border-radius: 8px; overflow-x: auto;">
git clone &lt;repository&gt;
cd peso
cp env.example .env
# Éditer .env avec vos paramètres</pre>
                        
                        <h3>2. Lancer avec Docker</h3>
                        <pre style="background: #e9ecef; padding: 15px; border-radius: 8px; overflow-x: auto;">
docker-compose up -d</pre>
                        
                        <h3>3. Accéder à l'API</h3>
                        <pre style="background: #e9ecef; padding: 15px; border-radius: 8px; overflow-x: auto;">
API: http://localhost:8000
Documentation: http://localhost:8000/docs
Cette page: http://localhost:8000/docs/custom</pre>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
            // Add some interactivity
            document.addEventListener('DOMContentLoaded', function() {
                // Smooth scroll for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                });
                
                // Add loading state to export button
                const exportBtn = document.querySelector('a[href="/export/swagger-collection"]');
                if (exportBtn) {
                    exportBtn.addEventListener('click', function() {
                        this.innerHTML = '⏳ Génération en cours...';
                        setTimeout(() => {
                            this.innerHTML = '📥 Télécharger Collection Postman';
                        }, 2000);
                    });
                }
            });
        </script>
    </body>
    </html>
    """

    return HTMLResponse(content=html_content)
