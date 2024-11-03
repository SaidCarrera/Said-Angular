# Said-Angular 
Este proyecto es una aplicación web desarrollada con Angular, que permite a los usuarios registrarse, iniciar sesión y gestionar una lista de items. La aplicación incluye autenticación segura mediante JWT y está desplegada en Firebase Hosting.

# Tabla de Contenidos

Características
Requisitos
Instalación
Estructura del Proyecto
Uso de la Aplicación
Despliegue en Firebase
Capturas de Pantalla
Contribuciones
Licencia

# Características

Autenticación de Usuarios: Los usuarios pueden registrarse e iniciar sesión con credenciales.
Protección de Rutas: Solo los usuarios autenticados pueden acceder a ciertas páginas.
Gestión de Items: Los usuarios pueden ver, agregar, editar y eliminar items en la lista de gestión de items.
Despliegue en Firebase Hosting: La aplicación está alojada en Firebase y accesible en línea.

# Requisitos
Node.js: Asegúrate de tener instalada la versión LTS de Node.js.
Angular CLI: Instala Angular CLI

# Configura el Backend
Si tienes un backend en Node.js, asegúrate de que está en ejecución y que la URL está correctamente configurada en auth.service.ts en apiUrl.

<img width="544" alt="Captura de pantalla 2024-10-31 a la(s) 8 45 00 a  m" src="https://github.com/user-attachments/assets/9785f1f4-3442-4cc9-9381-760296758d70">

# Autenticación de Usuarios
Registro: Los nuevos usuarios pueden registrarse ingresando un nombre de usuario y contraseña en la página de registro (/register).
Inicio de Sesión: Los usuarios pueden iniciar sesión en la página de login (/login). Al iniciar sesión exitosamente, se almacena un token JWT en el localStorage.

# Rutas Protegidas
La página de gestión de items (/items) está protegida mediante el authGuard, lo que significa que solo los usuarios autenticados pueden acceder a ella. Si un usuario no autenticado intenta acceder a /items, será redirigido automáticamente a /login.

# Gestión de Items
Una vez autenticado, el usuario puede ver, agregar, editar y eliminar items en la página /items.

# Acceso a la Aplicación en Línea 


# Anexos 
<img width="753" alt="Captura de pantalla 2024-10-31 a la(s) 8 48 18 a  m" src="https://github.com/user-attachments/assets/8547dd58-b482-4610-b904-173b71b36c74">

<img width="1279" alt="Captura de pantalla 2024-10-31 a la(s) 8 50 43 a  m" src="https://github.com/user-attachments/assets/e91e6b74-abc6-4210-847a-0891bfe6acfb">

<img width="1272" alt="Captura de pantalla 2024-10-31 a la(s) 8 50 14 a  m" src="https://github.com/user-attachments/assets/e23313fa-a31a-42cb-8f22-c3f09332421e">


