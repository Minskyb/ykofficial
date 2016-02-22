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
        requirejs:{
            options:{
                banner:'<%=banner%>\n'
            },
            multi:{
                options:{
                    appDir:'www',
                    mainConfigFile:''
                }
            }
        }
    });

}