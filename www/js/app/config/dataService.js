/**
 * Created by ASUS on 2016/2/24.
 */
'use strict';

define([],function(){

    var host = 'http://192.168.20.16';

    var dataService = {

        version:'1.0.0',

        getPicList:host+'/hp/Home/index/piclist',

        aboutAs:host+'/hp/Home/Aboutus/getaboutus',

        getHotNews:host+'/hp/Home/News/getnewslist',

        getNewInfo:host+'/hp/Home/News/getnewinfo',

        getAllNews:host+'/hp/Home/News/getallnews'
    }

    return dataService;
});