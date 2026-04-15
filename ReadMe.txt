
Proyecto Inmobiliaria - CASAS.COM

Aplicación web para gestión inmobiliaria con Node.js, Express y MySQL.  
Permite visualizar propiedades en venta y alquiler, además de administrar registros mediante un panel privado.

------------------------------------------------------------
REQUISITOS PREVIOS

Antes de ejecutar el proyecto, asegurate de tener instalado:
- Node.js (versión 14 o superior)
- XAMPP (para Apache y MySQL)
- Navegador web (Chrome, Edge, Firefox, etc.)

------------------------------------------------------------
INSTALACIÓN

1. Clonar el repositorio:
   git clone `https://github.com/dbcomerciodigital/Inmobiliaria.git` [(github.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fgithub.com%2Fdbcomerciodigital%2FInmobiliaria.git")
   cd Inmobiliaria/TP Final

2. Instalar dependencias:
   npm install

3. Configurar la base de datos:
   - Abrí el panel de control de XAMPP y activá Apache y MySQL.
   - Entrá a phpMyAdmin: http://localhost/phpmyadmin
   - Creá una nueva base de datos llamada inmobiliaria.
   - Usá la pestaña Importar para cargar el archivo inmobiliaria.sql incluido en el repositorio.
   - Verificá que las tablas ventas y alquiler tengan registros.

4. Configurar credenciales en servidor.js:
   const conexion = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "inmobiliaria"
   });

------------------------------------------------------------
EJECUCIÓN

1. Desde la carpeta del proyecto, levantá el servidor:
   node servidor.js
   (o npm start si está configurado en package.json)

2. Abrí en el navegador:
   - http://localhost:3000/index.html → Página principal
   - http://localhost:3000/ventas.html → Propiedades en venta
   - http://localhost:3000/alquiler.html → Propiedades en alquiler

------------------------------------------------------------
ESTRUCTURA DEL PROYECTO

- publico/ → Archivos visibles al usuario (HTML, CSS, JS, imágenes).
- privado/ → Panel de administración (HTML, CSS, JS).
- servidor.js → Servidor Node.js con rutas y conexión a MySQL.
- inmobiliaria.sql → Script SQL para crear la base de datos y tablas.
- package.json → Configuración de dependencias y scripts.

------------------------------------------------------------
NOTAS

- No usar Live Server: el proyecto depende del backend en Node.js y MySQL.
- Si no aparecen las tarjetas, revisá que:
  - MySQL esté corriendo en XAMPP.
  - La base de datos inmobiliaria esté importada y con registros.
  - El servidor esté levantado en el puerto correcto (3000 por defecto).

------------------------------------------------------------
AUTORES

- Diego Barbetti  
- Equipo de desarrollo - UTN

---
