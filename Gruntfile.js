module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: {
					'css/base.css': 'css/base.scss'
				},
			},
		},

		autoprefixer: {
			dist: {
				files: {
					'css/style.css': 'css/base.css'
				},
			},
		},

		connect: {
			server: {
				options: {
					port: 9000,
					hostname: 'localhost',
					livereload: true,
					open: true
				},
			},
		},

		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: ['*.html'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['css/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: false,
				},
			},
			script: {
				files: ['js/*.js'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'autoprefixer', 'connect', 'watch']);
}