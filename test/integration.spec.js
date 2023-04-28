const request = require('supertest');
const mongoose = require('mongoose');
//const Usuario = require('../models/Users')
import Usuario from '../models/Users';

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
    const usuarios = [
      { nombresUsuario: 'Maria José', celularUsuario: 3124567832},
      { nombresUsuario: 'Juan Perez', celularUsuario: 3117653451}
    ];
    await Usuario.insertMany(usuarios);

    //Hacer solicitud Get a /usuarios
    const response = await request(app).get('/api/users');

    //Verificar que la respuesta tenga status 200
    expect(response.status).toBe(200);

    //Verificar que la respuesta tenga los usuarios creados
    expect(response.body).toHaveLength(usuarios.length);
    expect(response.body[0].nombresUsuario).toBe(usuarios[0].nombresUsuario);
    expect(response.body[1].celularUsuario).toBe(usuarios[1].celularUsuario);
  });
});

//Limpiar las colecciones de la base de datos después de las pruebas
afterEach(async ()=>{
  await Usuario.deleteMany();
});

//Cerrar la conexion con la base de datos despues de terminar las pruebas
afterAll(async ()=>{
  await mongoose.connection.close();
});


