'use strict';

var process = require('child_process');
var exec = process.exec;

module.exports = function(grunt) {

	grunt.registerTask('pub', 'Executing pub build...', function() {

		var next = this.async();

		var options = this.options({
			root:'.',
			target:'www'
		});

		exec('pub build ' + options.target, {'cwd':options.root}, function (error, stdout, stderr) {

			grunt.log.write(stdout);

			grunt.log.writeln("Error code:" + error);
			next(error);
		});

	});

};
