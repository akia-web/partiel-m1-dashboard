# Utiliser une image Node officielle comme base
FROM node:20-alpine

# Définir le répertoire de travail à /app
WORKDIR /app

# Copier le fichier package.json et package-lock.json dans le répertoire de travail
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code source de l'application dans le répertoire de travail
COPY . .

# Exposer le port 4200 pour Angular
EXPOSE 4200

# Démarrer le serveur de développement Angular
CMD ["npm", "start"]
