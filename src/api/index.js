'use strict';

var express = require('express'),
	todos   = require('../../mock/todos.json');

// Un enrutador es como otra app que tendra sus propias
// rutas, esto es una buena practica para evitar conflictos
// con las rutas de la carpeta 'public'.
var router = express.Router();

router.get('/todos', function(req, res){
	res.json({ todos: todos });
});

// TODO: Add POST route to create new entries.

// TODO: Add PUT route to update a existing entry.

// TODO: Add DELETE route to delete a existing entry.

module.exports = router;