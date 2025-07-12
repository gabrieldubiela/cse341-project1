const swagger = require('swagger-autogen')();

const doc = {  
    info: {
        title: 'Contacts API',
        description: 'API for managing contacts',
    },
    host: 'https://cse341-project1-jpoj.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swagger(outputFile, endpointsFiles, doc)
