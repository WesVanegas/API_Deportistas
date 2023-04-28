describe('POST /api/users', ()=>{
  test('Debe crear un nuevo usuario', async()=>{
    const res = await request(app)
      .post('/api/users')
      .send({
        nombresUsuario: 'Juan Perez',
        celularUsuario: 3114563421
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.nombresUsuario).toEqual('Juan Perez');
    expect(res.body.celularUsuario).toEqual(3114563421)
  });
  test('Deberia dar error si falta algun campo requerido', async ()=>{
    const res = await request(app)
      .post('/api/users')
      .send({
        nombresUsuario: 'Juan Perez'
      });
    expect(res.statusCode).toEqual(400);
  });

});
