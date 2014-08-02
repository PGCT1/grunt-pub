'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		root:'.',
		target:'www'
	});

	console.log('ping')

	grunt.loadTasks('tasks');

};
