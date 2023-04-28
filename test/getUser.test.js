describe('GET /api/users/:id', ()=>{
  test('Deberia obtener un usuario por su ID', async()=>{
    const res = await request(app).get(`/api/users/${newUserId}`);
    expect(res.statusCode).toEqual(404);
  });
  test('Deberia dar error si se le pasa un ID invalido', async ()=>{
    const res = await request(app).get('/api/users/12435');
    expect(res.statusCode).toEqual(500);
  });
});
