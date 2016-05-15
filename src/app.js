'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./api');

// Import mongodb DB.
require('./database');
require('./seed');

// Coloca toda la carpeta public en la ruta principal,
// por lo tanto se pueden acceder a las demas carpetas
// automaticamente.
app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use('/api', router);


app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log('The server is running on port 3000 ....');
});
