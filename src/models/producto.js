import { Schema, model } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
    unique: true,
  },
  medidas: {
    type: String,
    minLength: 2,
    maxLength: 10,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    minLength: 2,
    maxLength: 40,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  paquetePorBulto: {
    type: Number,
    min: 0,
    max: 200,
  },
  descripcion: {
    type: String,
  },
  categoria: {
    type: String,
    required: true,
  },
  masVendido: {
    type: Boolean,
  },
});

const Producto = model("producto", productoSchema);

export default Producto;
