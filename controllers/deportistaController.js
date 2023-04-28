import Deportista from '../models/Deportista.js';

//Crear
const agregar = async (req, res) => {
  try {
    const deportista = new Deportista(req.body);
    const deportistaGuardado = await deportista.save();
    res.json({
      body: deportistaGuardado,
      ok: 'SI',
      msg: 'Registro creado correctamente.',
    });
  } catch (error) {
    console.log(error);
  }
};

//Leer
const listar = async (req, res) => {
  const deportistas = await Deportista.find();
  res.json(deportistas);
};

//Eliminar
const eliminar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Resgistro
  const deportista = await Deportista.findById(id);
  console.log(deportista);

  if (!deportista) {
    const error = new Error('Registro no encontrado.');
    return res.status(404).json({ msg: error.message, ok: 'SI' });
  }

  try {
    await deportista.deleteOne();
    res.json({ msg: 'Registro eliminado correctamente.', ok: 'SI' });
  } catch (error) {
    console.log(error);
  }
};

//Editar
const editar = async (req, res) => {
  //recibir los parametros por url
  const { id } = req.params;
  //console.log(id);

  //Validar si existe el registro
  const deportista = await Deportista.findById(id);
  console.log(deportista);

  if (!deportista) {
    const error = new Error('Registro no encontrado.');
    return res.status(404).json({ msg: error.message, ok: 'SI' });
  }

  //Capturar los datos del formulario
  deportista.nombre = req.body.nombre || deportista.nombre;
  deportista.apellidos = req.body.apellidos || deportista.apellidos
  deportista.edad = req.body.edad || deportista.edad
  deportista.celular = req.body.celular || deportista.celular
  deportista.deporte = req.body.deporte || deportista.deporte
  deportista.genero = req.body.genero || deportista.genero

  try {
    const deportistaGuardado = await deportista.save();
    res.json({
      body: deportistaGuardado,
      msg: 'Registro guardado correctamente.',
      ok: 'SI',
    });
  } catch (error) {
    console.log(error);
  }
};

//Leer uno
const listarUno = async (req, res) => {
  //recibir los parametros por url
  const { id } = req.params;

  //Validar si existe el Registro
  const deportista = await Deportista.findById(id);

  if (!deportista) {
    const error = new Error('Registro no encontrado.');
    return res.status(404).json({ msg: error.message, ok: 'SI' });
  }

  res.json(deportista);
};

export { agregar, listar, eliminar, editar, listarUno };
