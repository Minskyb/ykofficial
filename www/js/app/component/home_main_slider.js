/**
 * Created by ASUS on 2016/2/24.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/home_main_slider.html',
    'dataService',
    'extra',
    'slider'
],function($,BV,template,dataService){

    function HMSlider(options){
        BV.call(this,options);
    }

    HMSlider.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    HMSlider.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);

        this.template = template;
    }

    HMSlider.prototype.initData = function(){

        var that = this;

        $.ajax({
            url:dataService.getPicList,
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
                alert('Home Main Slider Picture Request Fail'+JSON.stringify(e));
            }
        });
    };

    HMSlider.prototype.render = function(){

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


    return HMSlider;
});