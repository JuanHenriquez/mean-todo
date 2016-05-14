'use stict';

var app = angular.module('todoListApp');

app.directive('todos', function() {
	return {
		templateUrl: 'templates/todo.html',
		controller: 'mainCtrl',
		replaced: true // Para reemplazar el tag 'todos' por el contenido de la plantilla.
	};
});