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
            build:'www_build'
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
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default',['clean','requirejs']);

}