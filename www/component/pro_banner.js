/**
 * Created by ASUS on 2016/3/28.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/pro_banner.html',
    'extra'
],function($,BV,template){

    function ProBanner(options){
        BV.call(this,options);
    }

    ProBanner.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    ProBanner.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);

        this.template = template;

        this.events = {
            '.menu click':link2Place
        }
    }

    function link2Place(e){
        var $target = $(e.target);
        $("a", e.currentTarget).removeClass("active");
        $target.addClass("active");
        var offsetTop = $($target.attr("data-target")).offset().top;

        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); // opera fix
        $body.animate({
            scrollTop:offsetTop-$(window).height()/2 + $($target.attr("data-target")).height()/2
        },"normal");
    }

    return ProBanner;


});