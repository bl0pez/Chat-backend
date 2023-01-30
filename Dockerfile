# Elejimos la imagen de node
FROM node:19.2-alpine3.16

#Entramos en la carpeta /app
WORKDIR /app

#Instalamos nodemon
RUN npm install -g nodemon

# Copiamos el package.json
COPY package*.json ./

# Copiamos el resto de archivos
COPY . .

# Instalamos las dependencias
RUN npm install

CMD ["npm", "run", "dev"]