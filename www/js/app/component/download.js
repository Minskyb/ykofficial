/**
 * Created by ASUS on 2016/3/16.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/download.html',
    'extra'
],function($,BV,template){

    var Download = function(option){

        BV.call(this,option);
    }

    Download.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    Download.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);
        this.template = template;
    }


    return Download;

});