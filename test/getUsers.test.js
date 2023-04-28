describe('GET /api/users', ()=>{
  test('Deberia retornar una lista de usuarios', async ()=>{
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
