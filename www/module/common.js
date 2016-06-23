/**
 * Created by ASUS on 2016/2/22.
 */
'use strict';

requirejs.config({
    baseUrl:'/lib',
    paths:{
        app:'../',
        dataService:'../config/dataService',
        /********************************
         *       插件
         ********************************/
        jquery:'jquery/jquery.1.9.1',
        underscore:'underscore/underscore-min-1.8.3',
        text:'require/require.text-2.0.5.min',
        css:'require/require.css.min-0.1.8',
        punk:'punk/js/punk',

        /********************************
         *        Bolt  框架
         ********************************/
        BView:'../component/abstract.view',
        BModule:'../module/abstract.module'
    },
    skim:{
        jquery:{
            exports:'jquery'
        },
        extra:{
            deps:['jquery'],
            exports:'extra'
        },
        punk:{
            deps:['jquery'],
            exports:'punk'
        }
    }
});