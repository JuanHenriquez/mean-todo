'use strict';

var app = angular.module('todoListApp');

app.controller("mainCtrl", function($scope, dataService){

	$scope.addTodo = function(){
		var todo = { 'name': 'This is a new task.' };
		$scope.todos.unshift(todo);
	};	

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

	dataService.getTodos(function(res){
		console.log(res.data);
		$scope.todos = res.data;
	});

});