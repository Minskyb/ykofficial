/**
 * Created by ASUS on 2016/2/22.
 */
'use strict';

module.exports = function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        build_dest:'www_build',
        banner:'/**\n' +
        '* <%=pkg.name%> v <%=pkg.version%>'+
        '*/',
        clean:{
            build:'www_build',
            css:'www/css',
            images:'www_build/images'
        },
        concat:{
            built:{
                src:[
                    'www/css/main.css'
                    //'www/js/lib/fullPage/fullPage.css'
                ],
                dest:'www/css/main.css'
            }
        },
        cssmin:{
           build:{
               files:[{
                   expand:true,
                   cwd:'<%=build_dest%>/css',
                   src:'*.css',
                   dest:'<%=build_dest%>/css',
                   ext:'.min.css',
                   extDot:'last'

               }]
           }
        },
        imagemin:{
            build:{
                options:{
                    optimizationLevel: 7,
                    pngquant: true
                },
                files:[{
                    expand:true,
                    cwd:'www',
                    dest:'<%=build_dest%>/',
                    src:'images/*.{png,jpg,jpeg,gif,webp,svg}'
                }]
            }
        },
        htmlmin:{
            options:{
                removeComments:true,
                removeCommentsFromCDATA:true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true
            },
            build:{
                files:[{
                    expand:true,
                    cwd:'<%=build_dest%>',
                    dest:'<%=build_dest%>',
                    src:'*.html'
                }]
            }
        },
        requirejs:{
            options:{
                banner:'<%=banner%>\n'
            },
            multi:{
                options:{
                    appDir:'www',
                    mainConfigFile:'www/js/app/module/common.js',
                    dir:'<%=build_dest%>',
                    modules:[
                        {
                            name:'../app/module/common',
                            include:[
                                'jquery',
                                'BView',
                                'BModule',
                                'text',
                                'extra',
                                'modal'
                            ]
                        },
                        {
                            name:'../app/module/home',
                            include:[
                                'app/component/header',
                                'app/component/logoMenu',
                                'app/component/home_main_slider',
                                'app/component/home_product_introduction',
                                'app/component/home_team_thumbnail'
                            ],
                            exclude:[
                                '../app/module/common'
                            ]
                        },
                        {
                            name:'../app/module/product_centre',
                            include:[
                                'fullPage'
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
                files: ['www/less/**/*.less','www/js/lib/fullPage/fullPage.css'],
                tasks: ['clean:css','less','concat']
            }
        }
    });

    require('load-grunt-tasks')(grunt,{ scope: 'devDependencies' });

    grunt.registerTask('default',[
        'clean:css',
        'less',
        'concat',
        'watch'
    ]);

    grunt.registerTask('build',[
        'clean:build',
        'less',
        'concat',
        'requirejs',
        'cssmin',
        'clean:images',
        //'imagemin',
        'htmlmin'
    ])
}