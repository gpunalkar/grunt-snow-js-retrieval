/*
 * grunt-snow-js-retrieval
 * https://github.com/itce/grunt-snow-js-retrieval
 *
 * Copyright (c) 2016 Andrey Dautev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('snow_js_retrieval', 'A simple timer that gets script includes (for now) for unit testing from a SNOW instance.', function () {
		var scriptIncludeAPI = 'api/now/table/sys_script_include?sysparm_query=nameSTARTSWITHNHP&sysparm_fields=name%2C%20script';
		var done = this.async();
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
				instance: '',
				userName: '',
				password: '',
				query: 'nameSTARTSWITHITCE',
				destination: 'lib/scriptIncludes'
			});

		var Client = require('node-rest-client').Client;
		var options_auth = { user: options.userName, password: options.password };
		var client = new Client(options_auth);

		if(!options.instance.endsWith('/')) {
			options.instance += '/';		
		}
		if(!options.destination.endsWith('/')) {
			options.destination += '/';		
		}
		//Get Script Includes
		client.get(options.instance + scriptIncludeAPI , function (data, response) {	
			for(var i=0; i<data.result.length; i++) {
				grunt.file.write(options.destination + data.result[i].name + '.js',data.result[i].script);
			}
			done();
		});
	});

};
