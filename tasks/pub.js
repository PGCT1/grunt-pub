'use strict';

var process = require('child_process');
var exec = process.exec

module.exports = function(grunt) {

	grunt.registerMultiTask('pub', 'Executing pub build...', function() {

		var options = this.options({
			root:'.',
			target:'www'
		});

		process.chdir(options.root);

		exec("pub build " + options.target, function (error, stdout, stderr) {
			grunt.log.writeln("Error code:" + error);
			next(error);
		});

	}, this.async());

};
