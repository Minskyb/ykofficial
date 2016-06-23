/**
 * Created by ASUS on 2016/2/23.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/header.html',
    'extra'
],function($,BV,template){

    function Header(options){

        BV.call(this,options);
    }

    Header.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    Header.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);
        this.template = template;
    }

    return Header;
});