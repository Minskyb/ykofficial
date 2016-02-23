/**
 * Created by ASUS on 2016/2/22.
 */
'use strict';

module.exports = function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        banner:'/**\n' +
        '* <%=pkg.name%> v <%=pkg.version%>'+
        '*/',
        clean:{
            build:'www_build',
            css:'www/css'
        },
        requirejs:{
            options:{
                banner:'<%=banner%>\n'
            },
            multi:{
                options:{
                    appDir:'www',
                    mainConfigFile:'www/js/app/module/common.js',
                    dir:'www_build',
                    modules:[
                        {
                            name:'../app/module/common',
                            include:[
                                'jquery',
                                'BView',
                                'BModule',
                                'text',
                                'extra'
                            ]
                        },
                        {
                            name:'../app/module/index',
                            include:[
                                'app/component/header'
                            ],
                            exclude:[
                                '../app/module/common'
                            ]
                        }
                    ]
                }
            }
        },
        less:{
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'www/css/main.css.map'
                },
                src: 'www/less/<%= pkg.name %>.less',
                dest: 'www/css/main.css'
            },
            compileTheme: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>-theme.css.map',
                    sourceMapFilename: 'www/css/main-theme.css.map'
                },
                src: 'www/less/theme.less',
                dest: 'www/css/main-theme.css'
            }
        },
        watch: {
            less: {
                files: 'www/less/**/*.less',
                tasks: ['clean:css','less']
            }
        }
    });

    require('load-grunt-tasks')(grunt,{ scope: 'devDependencies' });

    grunt.registerTask('default',[
        'clean:css',
        'less',
        'watch'
    ]);

    grunt.registerTask('build',[
        'clean',
        'less:build',
        'less',
        'requirejs'
    ])

}