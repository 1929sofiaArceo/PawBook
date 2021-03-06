//Cargamos dependencias
const express= require('express');
const Database = require('./src/core/database');
const path = require('path');
const apiRoutes = require('./src/routes/routes');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//incializamos app
const app = express();
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'src/views/', 'index.html');
    res.sendFile(indexPath);
});
const port = process.env.PORT || 3000;

//Swagger Configuration
const swaggerOptions = {
    swaggerDefinition:{
        swagger : '2.0',
        info: {
            title: 'ITESO PawBook',
            description: 'A live chat web application',
            version: '1.0.0', //version, cambios, fixes
            //en este ejemplo, version 1, sin cambios menores, sin fixes
            servers: ['http://localhost:'+port]
        }
    },
    apis: ['./src/modules/**/*.routes.js']
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

Database.connect().then((client) =>{
    //Listen to port
    app.listen(port, ()=>{
        console.log('App is running in port '+port+'...');
    });
    
});