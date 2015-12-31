module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'public/assets/css/custom.css': 'public/assets/sass/style.scss'
				}
			}
		}
	})

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass")

	grunt.registerTask("default", function (name) {
		grunt.log.writeln('Hello ' + name)
	});
};
