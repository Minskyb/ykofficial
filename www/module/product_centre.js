/**
 * Created by ASUS on 2016/3/16.
 */
'use strict';

requirejs(['./common','../lib/jquery/jquery.1.9.1'],function(){
    requirejs([
        'jquery',
        'BModule',
        'app/component/pro_banner',
        'extra',
        'punk'
    ],function($,BM,cProBa){

        function Index(options){

            BM.call(this);
        };

        Index.prototype = $.YK_OFFICIAL.inheritPrototype(BM.prototype);

        Index.prototype.initProperty = function(){

            BM.prototype.initProperty.call(this);

            this.views = {
                '.js-c-banner':cProBa
            }
        }


        $(document).ready(function(){

            $(".pk-animation-box").Abox();

            var index = new Index();
            index.render();
            confirmPlace();

            $(window).bind("scroll",confirmPlace);

            function confirmPlace(e){
                var g = $(window).scrollTop(),min=g,$target,id;

                if(g<=0){
                    $(".nav-top .menu a").removeClass("active");
                    $(".nav-top .menu a[data-target=#page1]").addClass("active");
                    return;
                }

                $("[id^='page']").each(function(){
                    var $this = $(this),
                        top = $this.offset().top;
                    if(g > top + $this.height()/2 - $(window).height()/2 -160  && g < top + $this.height()/2 - $(window).height()/2 +160){
                        id= "#"+$this.attr("id");
                        $this.addClass("active");
                        $(".nav-top .menu a").removeClass("active");
                        $(".nav-top .menu a[data-target="+id+"]").addClass("active");
                    }
                });
            }

            $(".service").click(link2Place);

            function link2Place(e){
                var $target = $(e.target);
                var offsetTop = $($target.attr("data-target")).offset().top;

                var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); // opera fix
                $body.animate({
                    scrollTop:offsetTop-$(window).height()/2 + $($target.attr("data-target")).height()/2
                },"normal");
            }
        });
    });
})