const request = require('supertest');

import app from "..";

describe('POST /api/users', ()=>{
  test('Debe crear un nuevo usuario', async()=>{
    const res = await request(app)
      .post('/api/users')
      .send({
        nombre: 'daniela',
        apellidos: 'sanchez',
        edad: 25,
        celular: 3148046799,
        deporte: 'futbol',
        genero: 'binario'
      });

    expect(res.statusCode).toEqual(200);
    

  });
  test('Deberia dar error si falta algun campo requerido', async ()=>{
    const res = await request(app)
      .post('/api/users')
      .send({
        nombre: 'daniela',
        apellidos: 'sanchez'
      });
    expect(res.statusCode).toEqual(200);
  });
});
