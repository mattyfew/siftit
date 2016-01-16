'use strict'

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

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
				files: ['**.html']
			},
			script: {
				options: { livereload: true },
				files: ['**.js']
			}
		}
	});

	// 
	// Register modules 
	// 

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//
	// Register tasks
	//

	grunt.registerTask('default', ['watch']);

};
