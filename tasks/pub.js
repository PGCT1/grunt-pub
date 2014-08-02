'use strict';

var exec = require('child_process').exec;

module.exports = function(grunt) {

	grunt.registerMultiTask('pub', 'Executing pub build...', function() {

			exec("pub build", function (error, stdout, stderr) {
				grunt.log.writeln("Error code:" + error);
				next(error);
			});

		}, this.async());

	});

};
