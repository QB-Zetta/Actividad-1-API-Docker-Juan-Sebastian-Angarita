Actividad 1 - API Dockerizada con Node.js y MongoDB
Este proyecto es parte de la Actividad 1 del Máster en Full Stack Web Development, y consiste en el desarrollo de una API REST utilizando Node.js, Express y MongoDB, completamente dockerizada y documentada.

Tecnologías utilizadas
Node.js + Express

MongoDB

Mongoose (ODM para MongoDB)

Docker y Docker Compose

Git y GitHub

Postman (para pruebas de la API)

Funcionalidades de la API
La API permite:

Obtener todos los usuarios o filtrarlos por campos (GET)

Crear un nuevo usuario o modificar uno existente (PUT)

Eliminar un usuario por nombre (DELETE)

Estructura del Proyecto
docker_intro/ ├── server.js (Código principal de la API)
├── Dockerfile (Imagen de la API)
├── docker-compose.yml (Contenedor para API + MongoDB)
├── .gitignore (Archivos ignorados por Git)
├── package.json (Dependencias del proyecto)
└── README.md (Este documento)

Rutas Disponibles
Método: GET
Ruta: /api/get
Descripción: Devuelve todos los usuarios o filtrados por campos (como name o gender)

Método: PUT
Ruta: /api/update
Descripción: Crea un usuario si no existe, o lo actualiza si ya existe

Método: DELETE
Ruta: /api/delete
Descripción: Elimina un usuario por nombre

¿Cómo levantar el proyecto con Docker?
Clonar el repositorio:

git clone https://github.com/QB-Zetta/Actividad-1-API-Docker-Juan-Sebastian-Angarita.git
cd docker_intro

Ejecutar el siguiente comando:

docker-compose up --build

Acceder a la API en:

http://localhost:8080/api/get

Ejemplos de uso en Postman
GET todos los usuarios:
GET http://localhost:8080/api/get

GET filtrado por género:
GET http://localhost:8080/api/get?gender=Male

PUT para crear o actualizar un usuario:
Ruta: http://localhost:8080/api/update
Método: PUT
Body (raw → JSON):

{ "name": "Sebas", "gender": "Male", "age": 27 }

DELETE para eliminar un usuario:
Ruta: http://localhost:8080/api/delete
Método: DELETE
Body (raw → JSON):

{ "name": "Sebas" }

Autor
Juan Sebastián Angarita
Estudiante del Máster en Full Stack Web Development
GitHub: https://github.com/QB-Zetta

Estado del proyecto
API funcional

Dockerizado

Subido a GitHub

Documentado

Pull Request listo para revisión