import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         nombresUsuario:
 *           type: string
 *           description: Nombre del usuario.
 *         celularUsuario:
 *           type: number
 *           description: Número de celular del usuario
 *       example:
 *         nombresUsuario: Veronica
 *         celularUsuario: 3145763456
 */

const deportistaSchema = mongoose.Schema({
  nombre:{
    type: String,
    require: true,
    trim: true
  },
  apellidos:{
    type: String,
    require: true,
    trim: true
  },
  edad:{
    type: Number,
    require: true,
    trim: true
  },
  celular:{
    type: Number,
    require: true,
    trim: true
  },
  deporte:{
    type: String,
    require: true,
    trim: true
  },
  genero:{
    type: String,
    require: true,
    trim: true
  }
},{
  timestamps: true
});

const Deportista = mongoose.model("Deportista", deportistaSchema);
export default Deportista;
