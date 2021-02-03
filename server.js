/******************************************************************
 *                          EXPRESS ROUTER
 * Router realizado con Express
 * Se encargará principalmente de devolver los archivos de audio
 * solicitados desde el reproductor.
******************************************************************/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');

const port = normalizePort(process.env.PORT || '3000');

/***********************************************
 *  ENCODING PARAMETERS
************************************************/
app.use(bodyParser.urlencoded({extended: true}));


/*          Definiciones
***************************************/


/*         Import de Controladores
****************************************/


/*         Resolución de rutas
****************************************/


/*         Rutas estáticas
****************************************/
app.use('/', express.static('dist/frontend-comunidades'));

console.log(`Server started at port ${port} look at url: http://localhost:${port}`);
app.listen(port);
