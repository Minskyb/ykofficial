/**
 * Created by ASUS on 2016/3/16.
 */
'use strict';

requirejs(['./common','../../lib/jquery/jquery.1.9.1'],function(){
    requirejs([
        'jquery',
        'BModule',
        'extra',
        'punk'
    ],function($,BM){

        function Index(options){

            BM.call(this);
        };

        Index.prototype = $.YK_OFFICIAL.inheritPrototype(BM.prototype);

        Index.prototype.initProperty = function(){

            BM.prototype.initProperty.call(this);
        }

        $(document).ready(function(){

            $(".pk-animation-box").Abox();

            var index = new Index();
            index.render();

        });

    });
})