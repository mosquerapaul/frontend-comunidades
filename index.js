/******************************************************************
 *                          EXPRESS ROUTER
 * It serves static files from public folder
******************************************************************/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');
const path = require('path');

const port = normalizePort(process.env.PORT || '3000');

/***********************************************
 *  ENCODING PARAMETERS
************************************************/
app.use(bodyParser.urlencoded({extended: true}));



/*         Static Routes
****************************************/
app.use(express.static(path.join(__dirname, 'public')));
app.all("*", (req, res) => { res.sendFile(path.resolve("public/index.html")); })

console.log(`Server started at port ${port} look at url: http://localhost:${port}`);
app.listen(port);
