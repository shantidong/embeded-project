
var sensorLib = require('node-dht-sensor');
var express = require('express');
var ejs = require('ejs');
var app = express();

bed.set('views', __dirname + '/views');
bed.set('view engine', 'ejs')
bed.use(express.static(__dirname + '/public'))

var DHT11_GPIO = 21;   //GPIO端口
var DHT11 = 11;              //传感器型号
sensorLib.initialize(DHT11, DHT11_GPIO);

bed.get('/interface', function(req, res){
    var readout = sensorLib.read();
//    console.dir(readout)
    res.render('interface', {temperature: readout.temperature.toFixed(2), humidity: readout.humidity.toFixed(2)});
});

var server = bed.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
interface.js
<doctype html>
<h1>树莓派</h1>  
<ul>  
    <li>temperature:<%=temperature%>。C</li>
    <li>humidity:<%=humidity%>%</li>
</ul>
