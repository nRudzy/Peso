-- Script d'initialisation de la base de données
CREATE DATABASE peso_db;
\c peso_db;

-- Extension pour les UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Extension pour les fonctions de date
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; 