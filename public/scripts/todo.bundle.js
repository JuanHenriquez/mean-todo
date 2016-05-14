webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// Create the angular app. The empy array is for dependences
	// but rigth now we don't have any dependency. 

	var angular = __webpack_require__(1);

	var app = angular.module("todoListApp", []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use stict';
	var angular = __webpack_require__(1);
	var app = angular.module('todoListApp');

	app.directive('todos', function() {
		return {
			templateUrl: 'templates/todo.html',
			controller: 'todoCtrl',
			replaced: false // Para reemplazar el tag 'todos' por el contenido de la plantilla.
		};
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
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

/***/ }
]);