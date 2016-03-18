/**
 * Created by ASUS on 2016/3/16.
 */
'use strict';

requirejs(['./common'],function(){
    requirejs([
        'jquery',
        'BModule',
        'modal',
        'fullPage',
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

            $.fn.fullpage({
                verticalCentered: false,
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
                navigation: true,
                navigationTooltips: ['首页', '健康自检', '私家医生', '上门医生', '线上问询', '功能'],
                /*
                 * @param anchorLink 锚链接的名称
                 * @param index 当前页序号
                 * */
                afterLoad:function(anchorLink ,index){

                    if(index == 1 || index == 6) return;
                    var className = ".section_"+index+" .js_ani";



                    if(/MSIE 8/i.test(navigator.userAgent)){

                        switch (index){
                            case 2:
                            case 4:
                            $(className).animate({left:"0px"},"normal",'linear');
                            break;
                            case 3:
                            case 5:
                            $(className).animate({right:"0px"},"normal",'linear');
                            break;
                        }
                    }else{
                        $(className).addClass("in");
                    }
                },
                /*
                 * @param index 当前所在页
                 * @param nextIndex 目标页
                 * @param direction 方向 值为 up 或 down
                 * */
                onLeave:function(index,nextIndex,direction){

                    if(index == 1 || index == 6) return;
                    var className = ".section_"+index+" .js_ani";

                    if(/MSIE 8/i.test(navigator.userAgent)){

                        switch (index){
                            case 2:
                            case 4:
                            $(className).animate({left:"-500px"},400,'linear');
                            break;
                            case 3:
                            case 5:
                            $(className).animate({right:"-500px"},400,'linear');
                            break;
                        }
                    }else{
                        $(className).removeClass("in");
                    }
                }
            });
        });

    });
})