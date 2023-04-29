import mongoose from "mongoose";

/**
* @swagger
* components:
*   schemas:
*     Deportista:
*       type: object
*       required:
*         -nombre
*         -apellidos
*         -edad
*         -celular
*         -deporte
*         -genero 
*  
*       properties:
*         nombre:
*           type: string
*           description: Nombre del deportista.
* 
*         apellidos:
*           type: string
*           description: apellidos del deportista.
*  
*           edad:
*             type: number,
*             description: edad del deportista.
*  
*          celular:
*             type: number,
*             description: celular del deportista.
*  
*           deporte:
*              type: string,
*              description: deporte que practica el deportista.
*           
*           genero:
*              type: string,
*              description: genero del deportista.
*               
*       example:
*         nombre: Veronica
*         apellidos: sanchez rodriguez
*         edad: 25
*         celular: 3145763456
*         deporte: futbol
*         genero: binario
* 
* 
* 
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
