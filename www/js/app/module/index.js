/**
 * Created by ASUS on 2016/2/22.
 */
'use strict';

requirejs(['./common'],function(){
    requirejs([
        'jquery',
        'BModule',
        'app/component/header',
        'app/component/logoMenu',
        'app/component/home_main_slider',
        'app/component/home_product_introduction',
        'app/component/home_we_can',
        'extra'
    ],function($,BM,cHeader,cLogoMenu,cHMSlider,cHPIntroduction,cHWeCan){

        function Index(options){

            BM.call(this);
        };

        Index.prototype = $.YK_OFFICIAL.inheritPrototype(BM.prototype);

        Index.prototype.initProperty = function(){

            BM.prototype.initProperty.call(this);
            this.views = {
                '.js-c-header':cHeader,
                '.js-c-logoMenu':cLogoMenu,
                '.js-c-slider':cHMSlider,
                '.js-c-product-introduction':cHPIntroduction,
                '.js-c-home-we-can':cHWeCan

            }
        }

       $(document).ready(function(){
           var index = new Index();
           index.render();
       });

    });
})