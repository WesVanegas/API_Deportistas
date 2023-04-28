/*import mongoose, { connect } from "mongoose";

const conectarBD = () =>{
  const urlConexion = String(process.env.MONGO_URI);
  connect(urlConexion)
  .then(con =>{
    console.log(`Conexión establecida con la base de datos: ${urlConexion}`);
  })
  .catch(error =>{
    console.log(error);
  });
};

export default conectarBD;
*/

import mongoose from "mongoose";

const conectarBD = () =>{
  const urlConexion = String(process.env.MONGO_URI);
  mongoose.connect(urlConexion)
  .then(con =>{
    console.log(`Conexión establecida con la base de datos: ${urlConexion}`);
  })
  .catch(error =>{
    console.log(error);
  });
};

export default conectarBD;

