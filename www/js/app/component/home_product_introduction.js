/**
 * Created by ASUS on 2016/2/25.
 */

'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/home_product_introduction.html',
    'dataService',
    'extra'
],function($,BV,template,dataService){

    function HPIntroduction(options){
        BV.call(this,options);
    }

    HPIntroduction.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    HPIntroduction.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);

        this.template = template;
    };

    HPIntroduction.prototype.initData = function(){

        var that = this;
        $.ajax({
            url:dataService.getPicList,
            type:'post',
            data:{type:2},
            beforeSend:function(xhr){
                //xhr.setRequestHeader('version',dataService.version);
            },
            success:function(res){

                that.data = {
                    "picList":res.piclist
                }

                $.YK_OFFICIAL.create(that);
            },
            error:function(e){
                alert('Home Product Introduction Image Request Fail'+ JSON.stringify(e));
            }
        })
    }

    return HPIntroduction;

})