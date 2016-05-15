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

/***/ }
]);
