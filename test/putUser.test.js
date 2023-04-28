describe('PUT /api/users/:id', ()=>{
  test('Deberia actualizar un usuario existente', async ()=>{
    const res = await request(app)
      .put(`/api/users/${newUserId}`)
      .send({
        nombresUsuario: 'Juan Perez',
        celularUsuario: 1234567890
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.celularUsuario).toEqual(1234567890);
  });
  test('Deberia dar error si se le pasa un id invalido', async ()=>{
    const res = await request(app)
      .put('/api/users/1234')
      .send({
        nombresUsuario: 'Juan Perez',
        celularUsuario: 1234567890
      });
      expect(res.statusCode).toEqual(500);
  });
});
