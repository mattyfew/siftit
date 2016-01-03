module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			files: 'public/assets/css/custom.css',
			tasks: ['sass']
		},
		sass: require('./custom_modules/sass').task
	})

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");

//	grunt.registerTask("default", function (name) {
//		grunt.log.writeln('Hello ' + name)
//	});
};
