/**
 * Created by ASUS on 2016/2/23.
 */
'use strict';

requirejs(['jquery'],function($){
    $.extend({
        YK_OFFICIAL:{
            inheritPrototype:function(prototype){
                function tempClass(){};
                tempClass.prototype = prototype;
                return new tempClass();
            }
        }
    });
});