
var sensorLib = require('node-dht-sensor');
var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

var DHT11_GPIO = 21;   //GPIO端口
var DHT11 = 11;              //传感器型号
sensorLib.initialize(DHT11, DHT11_GPIO);

app.get('/interface', function(req, res){
    var readout = sensorLib.read();
//    console.dir(readout)
    res.render('interface', {temperature: readout.temperature.toFixed(2), humidity: readout.humidity.toFixed(2)});
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
interface.js
<doctype html>
<h1>树莓派</h1>  
<ul>  
    <li>temperature:<%=temperature%>。C</li>
    <li>humidity:<%=humidity%>%</li>
</ul>
