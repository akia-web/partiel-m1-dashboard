FROM postgres:latest

# Optionnel : Copier les scripts SQL pour l'initialisation de la base de données
COPY init.sql /docker-entrypoint-initdb.d/

# Exposer le port PostgreSQL par défaut
EXPOSE 5432