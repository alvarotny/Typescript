//inicializar un proyecto usando => npm init -y                                 
//instalacion de los paquetes para express => npm install express cors dotenv
//instalacion de paquetes para relacionar -> express -> typescript => npm install --save-dev typescript ts-node @types/node @types/express @types/cors


//importacion de librerias
// express >= servidor web
// cors => permisos de origen
// dotevn => variables de entorno
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//carga el archivo .env dentro de process.env
dotenv.config();

// crea la aplicacion express
const app = express();
// Define el puerto usa el .env o el 3000
const port = process.env.PORT || 3000;
//activa middleaware, permite peticiones externas y leer json en el body
// middleaware => funciones q se ejecutan antes de q la ruta reciba la peticion
app.use(cors());
app.use(express.json());
// ruta get q responde a un json simple
app.get("/hello", (req, res) => {
    res.json({ message: "hola desde la api de typescript" });
});
// arrancar el servidor y mostrar la url
app.listen(port, () => {
    console.log(`servidor corriendo en la url => http://localhost:${port}`);
});


