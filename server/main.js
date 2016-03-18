/**
 * Created by ASUS on 2016/2/22.
 */
var app = require('./app');

var server = app.listen(4000,function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log('server is listening at http://%s:%s',host,port);
});