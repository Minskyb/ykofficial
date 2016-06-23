/**
 * Created by ASUS on 2015/12/31.
 */
'use strict';

(function(callback){
    "function" == typeof define && define.amd ? define(['jquery'],callback):"object" == typeof exports ? module.exports = callback : callback(jQuery);
})(function($){

    var Slider = function(element,setting){

        this.setting = setting;
        this.$element = $(element);
        this.$canvas = this.$element.find(".slider-canvas");
        this.pageCount = this.$canvas.find(".slider-page").length;
        this.width = this.$element.width() || $(document).width();
        this.height = this.$element.height() || $(document).height();
        this.totalLen = this.width * this.pageCount;
        this.left = 0;
    }

    Slider.prototype.init = function(){

        this.resetWidth();
        this.addSideNav();
        this.addEvent();
    }

    Slider.prototype.resetWidth = function(){
        this.$canvas.width(this.totalLen);
        this.$canvas.find(".slider-page").width(this.width);
    }

    Slider.prototype.addSideNav = function(){
        if(!this.setting.side_nav) return;

        var that = this;
        var sliderPrevDiv = document.createElement('div');
        sliderPrevDiv.className = 'slider-previous';

        sliderPrevDiv.onclick = function(e){
            that.forward(1);
        }
        this.$element.append(sliderPrevDiv);
        var sliderNextDiv = document.createElement('div');
        sliderNextDiv.className = 'slider-next';
        sliderNextDiv.onclick = function(e){
            that.forward(-1);
        }
        this.$element.append(sliderNextDiv);
    }

    Slider.prototype.addEvent = function(){

        // 先清除所有
        this.$element.off(".bt.slider.mouse");
        this.$element.on('mousedown.bt.slider.mouse', $.proxy(this.moveBegin,this));
    }

    Slider.prototype.moveBegin = function(e){

        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startTime = e.timestamp || new Date().getTime();

        // 先清除所有
        $(document).off('.bt.slider.move');
        $(document).on('mouseup.bt.slider.move', $.proxy(this.moveEnd,this));
        $(document).on('mousemove.bt.slider.move', $.proxy(this.move,this));

    }

    Slider.prototype.moveEnd = function(e){

        var dX = e.clientX - this.startX;
        var dY = e.clientX - this.startY;
        var dT = e.timestamp || new Date().getTime() - this.startTime;

        this.judgeDirection(dT,dX,dY);

        $(document).off('.bt.slider.move');
    }

    Slider.prototype.move = function(e){

        e.stopPropagation();
        e.preventDefault();   // 屏蔽默认移动事件（拖拽）

        var dX = e.clientX - this.startX;
        var dY = e.clientX - this.startY;
        //var dT = e.timestamp || new Date().getTime() - this.startTime;

        //this.$canvas.animate({
        //    "left": this.left+dX
        //},0);

        this.$canvas.css({
            "left": this.left+dX
        });


    }

    Slider.prototype.judgeDirection = function(dT,dX,dY){

        if(dT < 300 || dX> this.width/2){
            this.forward(dX,dY);
        }
        else{
            this.back(dX,dY);
        }
    }

    Slider.prototype.forward = function(dX,dY){

        var t = this.left + dX/Math.abs(dX)*this.width;
        if(t <= 0 && t > -this.totalLen)
            this.left = t

        this.$canvas.stop(true).animate({
            "left":this.left
        },this.setting.animation_duration);
    }

    Slider.prototype.back = function(dX,dY){

        this.$canvas.stop(true).animate({
            "left":this.left
        },this.setting.animation_duration);
    }

    function Plugin(setting){

        this.each(function(){
            var $this = $(this);
            var data = $this.data("bt.slider");
            if(!data)  $this.data("bt.slider",(data = new Slider(this,setting)));

            // execute the specified function
            if(typeof setting == 'string') data[setting]();
            else if(setting.init)
                data.init();
        });
    }

    // Slider AUTO-INIT
    //$(document.body).on('click.bt.slider')

    $.fn.slider = Plugin;
});