import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api-node',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3001/api',
      },
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
export default swaggerSpec;

/*
//Configuración API /info

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Api Node',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3001/api',
    },
    {
      url: 'http://localhost:3000/api',
    },
  ],
};

//Options

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const openApiConfiguration = swaggerJSDoc(options);
export default openApiConfiguration;
*/
