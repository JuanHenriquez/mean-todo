'use stict';
var angular = require('angular');
var app = angular.module('todoListApp');

app.directive('todos', function() {
	return {
		templateUrl: 'templates/todo.html',
		controller: 'todoCtrl',
		replaced: false // Para reemplazar el tag 'todos' por el contenido de la plantilla.
	};
});