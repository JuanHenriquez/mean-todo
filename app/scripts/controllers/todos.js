'use strict';
var angular = require('angular');
var app = angular.module('todoListApp');

app.controller('todoCtrl', function($scope, dataService) {

	$scope.deleteTodo = function( todo, $index ) {
		dataService.deleteTodo( todo );
		$scope.todos.splice($index, 1);
	};

	$scope.saveTodos = function(){
		var filterTodos = $scope.todos.filter(function( todo ){
			if (todo.edited) {
				return todo;
			}
		});
		dataService.saveTodos( filterTodos );
	}
	
});