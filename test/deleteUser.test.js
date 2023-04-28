describe('DELETE /api/users/:id', () => {
  test('Debe eliminar un usuario existente', async () => {
    const res = await request(app)
      .delete(`/api/users/${newUserId}`);
    expect(res.statusCode).toEqual(200);
  });
  test('Debe dar error si se le pasa ID invalido', async () =>{
    const res = await request(app)
      .delete('/api/users/1234');
    expect(res.statusCode).toEqual(500);
  });
});
