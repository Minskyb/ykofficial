/**
 * Created by ASUS on 2016/2/29.
 */
'use strict';

define([
    'jquery',
    'BView',
    'text!app/component/home_team_thumbnail.html',
    'dataService',
    'extra',
    'modal'
],function($,BV,template,dataService){

    function HTeamThumbnail(options){

        BV.call(this,options);
    }

    HTeamThumbnail.prototype = $.YK_OFFICIAL.inheritPrototype(BV.prototype);

    HTeamThumbnail.prototype.initProperty = function(){

        BV.prototype.initProperty.call(this);

        this.template = template;

    }

    HTeamThumbnail.prototype.initData = function(){

        var that = this;
        $.ajax({
            url:dataService.getPicList,
            type:'post',
            data:{type:3},
            beforeSend:function(xhr){
                //xhr.setRequestHeader('version',dataService.version);
            },
            success:function(res){

                that.data ={
                    "thumbnails":res.piclist
                }

                $.YK_OFFICIAL.create(that);
            },
            error:function(e){
                console.error('Team thumbnail img request fail '+JSON.stringify(e));
            }
        });
    }

    return HTeamThumbnail;
});