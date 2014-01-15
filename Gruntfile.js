module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less : {
			development: {
				files: {
					"css/main.css": "less/*.less"
				}
			},
			production: {				
				files: {
					"css/main.css": "less/*.less"
				}
			}
		},
		jshint : {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				
			},
			'<%= pkg.name %>' : {
				src : ['src/js/**/*.js']
			}
		},
		csslint: {
		  strict: {
		    options: {
		      import: 2
		    },
		    src: ['src/css/**/*.css']
		  },
		  lax: {
		    options: {
		      import: false
		    },
		    src: ['vendor/css/**/*.css', 'src/css/**/*.css']
		  }
		},		
		watch: {
			js: {
				files: ['<%= concat.js.src %>'],
				tasks: ['concat:js', 'jshint']
			},
			css: {
				files: ['<%= homepage.template %>'],
				tasks: ['concat:css']
			}
		},
		uglify : {
			options : {
				stripBanners : true,
				banner : '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */ \n'
			},
			build : {
				src : 'dest/js/app.js',
				dest : 'dest/js/app.min.js'
			},
			jquery : {
				src : 'dest/js/jquery.js',
				dest : 'dest/js/jquery.min.js'
			}
		}
	});

	// loaded a task from a npm module
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-remove-logging');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks("grunt-plato");
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	//load a custom task
	grunt.loadTasks("tasks");

	//setup our workflow
	grunt.registerTask("common", ["less:development", "csslint","jshint","concat", "homepage:dev"]);
	grunt.registerTask("dev", ["less", "csslint","jshint","concat", "homepage:dev", "watch"]);
	grunt.registerTask("build", ["clean","concat", "homepage:dev", /*"removelogging",*/ "uglify", "cssmin"]);
}