/**
 * Created by ASUS on 2016/3/16.
 */
'use strict';

requirejs(['./common'],function(){
    requirejs([
        'jquery',
        'BModule',
        'modal',
        //'fullPage',
        'extra'
    ],function($,BM){

        function Index(options){

            BM.call(this);
        };

        Index.prototype = $.YK_OFFICIAL.inheritPrototype(BM.prototype);

        Index.prototype.initProperty = function(){

            BM.prototype.initProperty.call(this);
        }

        $(document).ready(function(){
            var index = new Index();
            index.render();

        });

    });
})