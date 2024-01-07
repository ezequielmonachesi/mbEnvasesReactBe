import express from "express";
import cors from "cors";

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


//rutas
