'use strict';
var angular = require('angular');
var app = angular.module('todoListApp');

app.service('dataService', function( $http, $q ){

	this.getTodos = function( callback ){
		$http.get('/api/todos').then( callback );
	};

	this.deleteTodo = function( todo ) {
		console.log('The ' + todo.name + ' todo has been deleted.');
	};

	this.saveTodos = function( todos ) {
        // Array que contendra todos los request(solicitudes)
        // que se vayan hacer.
		var queue = [];

        // Itero sobre cada todo.
        todos.forEach(function(todo) {
            // Inicializo la variable request.
            var request;

            // Si el todo en esta parte de la iteracion no tiene un id
            // quiere decir que no esta guardado en la base de datos.
            // Si no esta guardado, guardo una solicitud POST(la que lo guardara)
            //en la variable request.
            if(!todo._id) {
                // Guardo la solicitud. No la ejecuto todavia.
                request = $http.post('/api/todos', todo);

            // Si el todo si tiene una id, quiere decir que se actualiazara.
            } else {
                request = $http.put('/api/todos/' + todo._id, todo)
                .then(function(result) {
                    todo = result.data.todo;
                    return todo;
                });
            }
            // Guardo la solicitud en mi array de solicitudes para su
            // posterior ejecucion.
            queue.push(request);
        });

        $q.all(queue).then(function(results) {
            console.log("I saved " + todos.length + " todos.");
            console.log(queue);
        });
	};

});
