/**
 * Created by ASUS on 2016/2/22.
 */
'use strict';

define(['underscore','jquery'],function(_,$){

    function BModule(options){

        this.initProperty();
    }

    BModule.prototype.initProperty = function(){

        // 事件监听配置
        this.events = {};

        // 组件配置
        this.views = {}

        // 组件集合
        this.components = [];
    }

    BModule.prototype.initComponents = function(){

        var that = this;
        $.each(this.views,function(K,V){

            if(K && 'function'== typeof V){
                that.components.push(new V({$wrapper:$(K)}));
            }
            else if(K && 'object' == typeof V){
                var options = $.extend(true,{$wrapper:$(K)}, V.option);
                that.components.push(new V.Func(options));
            }
            else {
                console.error("initComponents 组件配置错误！");
            }
        })
    }

    BModule.prototype.render = function(){

        this.initComponents();
        $.each(this.components,function(K,V){
            V.render();
        });
    }


    return BModule;
});