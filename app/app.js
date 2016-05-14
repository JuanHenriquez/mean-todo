'use strict';
// Create the angular app. The empy array is for dependences
// but rigth now we don't have any dependency. 

var angular = require('angular');

var app = angular.module("todoListApp", []);

require('./scripts/controllers/main.js');
require('./scripts/controllers/todos.js');
require('./scripts/directives/todos.js');
require('./scripts/services/data.js');