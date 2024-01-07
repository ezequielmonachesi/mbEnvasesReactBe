import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

// tomar puerto
//crear una instancia de express
const app = express();
//crear una variable para guardar puerto
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

//middleware: funciones que se ejecutan antes de las rutas
app.use(cors()); //permite conexiones remotas
app.use(express.json()); // puedo tomar del objeto request de  datos formato json.
app.use(morgan("dev")); //muestra status de las solicitudes solo en desarrollo
console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public"))); //nos ayuda a mostrar archivo index.js staticos en localhost
//http://localhost:4000

//rutas
