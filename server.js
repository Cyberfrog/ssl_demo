var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./ssl_certs/key.pem', 'utf8');
var certificate = fs.readFileSync('./ssl_certs/certificate.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpsServer = https.createServer(credentials, app);


app.get('/', function(req,res) {
    res.send('hello');
});
httpsServer.listen(8443);
