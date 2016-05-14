'use strict';
var angular = require('angular');
var app = angular.module('todoListApp');

app.controller("mainCtrl", function($scope, dataService){

	$scope.addTodo = function(){
		var todo = { 'name': 'This is a new task.' };
		$scope.todos.unshift(todo);
	};	

	dataService.getTodos(function(res){
		$scope.todos = res.data.todos;
	});

});