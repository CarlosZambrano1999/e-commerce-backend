# Proyecto Backend en Node.js

Este es el backend del proyecto e-commerce desarrollado con Node.js. A continuación se incluyen las instrucciones básicas para instalar, configurar y ejecutar el servidor.

Tener instalados los siguientes requisitos en el sistema operativo:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (instalado junto con Node.js)
- [MongoDB](https://www.mongodb.com/) o cualquier otra base de datos si es necesario para el proyecto.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone [https://github.com/usuario/repositorio-backend.git](https://github.com/CarlosZambrano1999/e-commerce-backend
   ```

2. Acceder al directorio del proyecto:

   ```bash
   e-commerce-backend
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install o npm i --force
   ```

## Ejecución del Servidor

1. Para ejecutar el servidor en modo desarrollo (usando `nodemon` si está instalado):

   ```bash
   nodemon app.js
   ```

   O 
   ```bash
   node app.js
   ```

   El servidor debería estar corriendo en `http://localhost:8888/`

En el archivo `package.json` puedes encontrar algunos scripts útiles:

- `npm start`: Ejecuta el servidor en producción.
- `npm run dev`: Ejecuta el servidor en modo desarrollo con recarga automática (requiere `nodemon`).

## Database

-`Ejecutar en la shell del mongoDB el script ubicado en la raiz` llamado database.js
