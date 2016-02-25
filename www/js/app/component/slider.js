/**
 * Created by ASUS on 2016/2/24.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/slider.html',
    'app/config/dataService',
    'extra',
    'slider'
],function($,BV,template,dataService){

    function Slider(options){
        BV.call(this,options);
    }

    Slider.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    Slider.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);

        this.template = template;
    }

    Slider.prototype.initData = function(){

        var that = this;

        $.ajax({
            url:dataService.getSliderImage,
            type:'post',
            data:{type:1},
            beforeSend:function(xhr){
                //xhr.setRequestHeader('version',dataService.version);
            },
            success:function(res){

                that.data = {
                    "sliders":res.piclist
                };

                $.YK_OFFICIAL.create(that);
            },
            error:function(e){
                alert(JSON.stringify(e));
            }
        });
    };

    Slider.prototype.render = function(){

        if(!this.$element){
            this.renderImmediately = true;
            return ;
        }

        BV.prototype.render.call(this);

        $(".slider").slider({
            "init":true,
            "animation_duration":"normal",
            "side_nav":true
        });
    }


    return Slider;
});