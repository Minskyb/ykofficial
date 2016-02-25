/**
 * Created by ASUS on 2016/2/23.
 */
'use strict';

(function(callback){
    "function" ==  typeof define && define.amd ? define(["jquery"],callback):"object" == typeof exports ? module.exports = callback : callback(jQuery);
})(function($){
    $.extend({
        YK_OFFICIAL:{
            inheritPrototype:function(prototype){
                function tempClass(){};
                tempClass.prototype = prototype;
                return new tempClass();
            },
            create:function(that){

                that.create();
                if(that.renderImmediately) that.render();
            }
        }
    });
});