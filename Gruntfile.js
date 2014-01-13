module.exports = function (grunt) {

    var appJSfiles = 'js/app/**/*.js';
    var confJSfiles = 'js/configurations/**/*.js';
    var specJSfiles = 'tests/**/*.spec.js';
    var JSfiles = [appJSfiles, confJSfiles, specJSfiles, '!js/**/*min.js'];

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: {
                    "css/main.css": "less/main.less"
                }
            },
            prod: {
                options: {
                    yuicompress: true
                },
                src: "less/main.less",
                dest: "css/main-min.css"
            }
        },
        jshint: {
            plsc: {
                options: {
                    ignores: ["tests", "node_modules", "js/libs", "js/app/app.min.js"],
                    jshintrc: ".jshintrc"
                },
                src: JSfiles
            }
        },
        eslint: {
            plsc: {
                options: {
                    config: "eslint.json"
                },
                src: JSfiles
            }
        },
        csslint: {
            plsc: {
                options: {
                    csslintrc: ".csslintrc",
                    import: 2
                },
                src: ['css/main.css']
            }
        },
        lesslint: {
            plsc: {
                options: {
                    csslint: {
                        csslintrc: ".csslintrc"
                    },
                    formatters: {
                        id: 'lesslint-xml',
                        dest: 'reports/lesslint.xml'
                    }
                },
                src: ['less/*.less', '!less/*variables.less']
            }
        },
        watch: {
            js: {
                files: JSfiles,
                options: {
                    livereload: true
                },
                tasks: ['jshint', 'eslint']
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less:dev', 'less:prod', 'csslint', 'lesslint'],
                options: {
                    livereload: true
                }
            }
        },
        requirejs: { // Using this grunt task, we don't need js/libs/requirejs/r.js | so we may deleete it later from codebase.
            js: {
                options: {
                    baseUrl: "./",
                    mainConfigFile: "js/app/main.js",
                    name: "js/app/main",
                    out: "js/app/app.min.js",
                    findNestedDependencies: true,
                    preserveLicenseComments: true,
                    paths: {
                        requireLib: "js/libs/requirejs/require"
                    },
                    include: ["requireLib"]
//                    ,optimize: "none", // Details in: 91 line: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                }
            }
        }
    };
    grunt.initConfig(config);

    grunt.loadTasks("tasks");

    grunt.registerTask("code", ["csslint", "lesslint", "jshint", "eslint"]);
    grunt.registerTask("default", ["less:dev", "less:prod", "code"]);
};
