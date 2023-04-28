const request = require('supertest');
const mongoose = require('mongoose');
//const Usuario = require('../models/Users')
import Deportista from '../models/Deportista';

//Importar app de index.js
import app from '../index'
//const app = require('../index')

//Configuración de las pruebas
beforeAll(async ()=>{
  const url = process.env.MONGO_URI
  await mongoose.connect(url, { useNewUrlParser: true});
});

describe('Get /api/users', ()=>{
  it('Deberias obtener todos los usuarios', async () =>{
    //Crear algunos usuarios
    const deportistas = [
      { nombre: 'Maria', apellidos: 'Vanegas', edad:20, celular:3124567832, deporte: 'Futbol', genero:'Femenino' },
      { nombre: 'Mario', apellidos: 'Vanegas', edad:20, celular:31245678342, deporte: 'Futbol', genero:'Masculino' }
    ];
    await Deportista.insertMany(deportistas);

    //Hacer solicitud Get a /usuarios
    const response = await request(app).get('/api/users');

    //Verificar que la respuesta tenga status 200
    expect(response.status).toBe(200);

    //Verificar que la respuesta tenga los usuarios creados
    expect(response.body).toHaveLength(deportistas.length);
    expect(response.body[0].nombre).toBe(deportistas[0].nombre);
    expect(response.body[1].apellidos).toBe(deportistas[1].apellidos);
    //expect(response.body[2].edad).toBe(deportistas[2].edad);
    //expect(response.body[3].celular).toBe(deportistas[3].celular);
    //expect(response.body[4].deporte).toBe(deportistas[4].deporte);
    //expect(response.body[5].genero).toBe(deportistas[5].genero);
  });
});

//Limpiar las colecciones de la base de datos después de las pruebas
afterEach(async ()=>{
  await Deportista.deleteMany();
});

//Cerrar la conexion con la base de datos despues de terminar las pruebas
afterAll(async ()=>{
  await mongoose.connection.close();
});


