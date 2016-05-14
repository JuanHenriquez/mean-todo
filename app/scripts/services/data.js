'use strict';
var angular = require('angular');
var app = angular.module('todoListApp');

app.service('dataService', function( $http ){

	this.getTodos = function( callback ){
		$http.get('/api/todos').then( callback );
	};

	this.deleteTodo = function( todo ) {
		console.log('The ' + todo.name + ' todo has been deleted.');
	};

	this.saveTodos = function( todos ) {
		console.log(todos.length + ' todos have been saved.');
	};

});