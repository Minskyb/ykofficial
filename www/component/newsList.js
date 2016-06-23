/**
 * Created by ASUS on 2016/3/1.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/newsList.html',
    'dataService',
    'extra'
],function($,BV,template,dataService){

    function NewsList(options){
        BV.call(this,options);
    }

    NewsList.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    NewsList.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);

        this.template = template;
    }

    NewsList.prototype.initData = function(){

        var that = this;
        $.ajax({
            url:that.url,
            type:'get',
            beforeSend:function(xhr){
                //xhr.setRequestHeader('version',dataService.version);
            },
            success:function(res){

            },
            error:function(e){
                console.error('newsList request fail '+JSON.stringify(e));
            }

        });
    }

    return NewsList;
});