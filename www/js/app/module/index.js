/**
 * Created by ASUS on 2016/2/22.
 */
'use strict';

requirejs(['./common'],function(){
    requirejs(['jquery','BModule','app/component/header','extra'],function($,BM,cHeader){

        function Index(options){

            BM.call(this);
        };

        Index.prototype = $.YK_OFFICIAL.inheritPrototype(BM.prototype);

        Index.prototype.initProperty = function(){

            BM.prototype.initProperty.call(this);
            this.views = {
                '.js-c-header':cHeader
            }
        }

       $(document).ready(function(){
           var index = new Index();
           index.render();
       });

    });
})