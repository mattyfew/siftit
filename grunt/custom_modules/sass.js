exports.task = {
	dist: {
		options: {
			style: 'expanded',
			lineNumbers: true, //good for debugging
			sourcemap: 'none' //gets rid of comments
		},
		files: [{
			expand: true,
			cwd: '../public/assets/sass',
			src: ['**/*.scss'],
			dest: '../public/asssets/css',
			ext: '.css'
		}]
	}
};