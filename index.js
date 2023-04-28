import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

//Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';
//import openApiConfiguration from './docs/swagger.js';

//Importación de rutas
import usersRoutes from './routes/usersRoutes.js';


//Iniciamos el servidor express
const app = express();
app.use(express.json()); //para leer los datos en formato json

//iniciamos varibles de entorno
dotenv.config();

//Conectar DB a mongo
conectarDB();

//Routing del API
app.use('/api/users', usersRoutes);

//Ruta documentación
//app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfiguration));
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec));



app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

//Obtenemos una varibale de entorno
const PORT = process.env.PORT || 3000;

//Lanzando el API

app.listen(PORT, () => {
  console.log(`Api escuchando en ${PORT}`);
});

export default app;
