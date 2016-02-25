/**
 * Created by ASUS on 2016/2/24.
 */
'use strict';
define([
    'jquery',
    'BView',
    'text!app/component/logoMenu.html',
    'extra'
],function($,BV,template){

    function LogoMenu(options){
        BV.call(this,options);
    }

    LogoMenu.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    LogoMenu.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);

        this.template = template;
        this.events = {
            '.logo-menu>.menu click':go2TargetPage
        }
    }

    function go2TargetPage(e){

        var $target = $(e.target);

        window.location.href = $target.attr("data-href");
    }

    return LogoMenu;

});