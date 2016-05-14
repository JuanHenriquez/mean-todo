'use strict';

var mongoose = require('mongoose');

// todo.name

// todo.completed

new mongoose.Schema({
	name: String,
	completed: Boolean
});