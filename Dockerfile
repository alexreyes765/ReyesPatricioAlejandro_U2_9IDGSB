# Usa la imagen oficial de Node.js versión 25
FROM node:25

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias primero
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que corre tu app
EXPOSE 3000

# Comando por defecto para ejecutar tu app
CMD ["npm", "start"]