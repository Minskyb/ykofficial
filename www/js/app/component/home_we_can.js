/**
 * Created by ASUS on 2016/2/25.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/home_we_can.html',
    'extra'
],function($,BV,template){

    function HWeCan(options){
        BV.call(this,options);
    }

    HWeCan.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    HWeCan.prototype.initProperty = function(){
        BV.prototype.initProperty.call(this);

        this.template = template;
    }

    return HWeCan;
})