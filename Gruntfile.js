'use strict'

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		jslint: {
			client: {
				src: ['**/*.js'],
				files: ['**/*.js'],
				directives: {
					browser: true,
					predef: ['jQuery']
				}
			}
		},
		
		csslint: {
			lax: {
				options: {import: false},
				src: ['**/*.css']
			}
		},
 
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'public/assets/sass',
					src: ['**/*.scss'],
					dest: 'public/assets/css',
					ext: '.css'
				}],
				options: {
					style: 'expanded',
					lineNumbers: true, //good for debugging
					sourcemap: 'none' //gets rid of comments
				}
			}
		},

		cssmin: {
			target: {
				files: [{ 
					expand: true,
					cwd: 'public/assets/css',
					src: ['*.css', '!*.min.css'],
					dest: 'public/assets/css',
					ext: '.min.css'
				}]
			}
		},

		watch: {
			options: { livereload: true },
			sass: {
				files: ['public/assets/sass/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			css: {
				options: { livereload: true },
				files: ['public/assets/css/custom.css']
			},
			html: {
				options: { livereload: true },
				files: ['**/*.html']
			},
			script: {
				options: { livereload: true },
				files: ['**/*.js']
			},
			tasks: ['csslint'],
			files: ['**/*.css']
		}
	});

	// 
	// Register modules 
	// 

	require('load-grunt-tasks' )(grunt);

	//
	// Register tasks
	//

	grunt.registerTask('lint', ['csslint', 'jslint']);
	grunt.registerTask('default', ['watch']);

};
