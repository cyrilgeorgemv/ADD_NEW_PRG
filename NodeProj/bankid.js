var express = require('express');
var request = require('request');
var soap = require('soap');
var soap = require('soap');
var fs = require('fs');
var Promise = require('promise');
var ClientSSLSecurityPFX = soap.ClientSSLSecurityPFX;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var url = 'D:\\Study\\v4.wsdl';
var certLoc = 'D:\\Study\\FPTestcert2_20150818_102329.pfx';
var args = {
	name : 'value'
};
var soapclient;
soap.createClient('https://appapi2.test.bankid.com/rp/v4?wsdl', {
	wsdl_options : {
		pfx : fs.readFileSync(certLoc),
		passphrase : 'qwerty123'
	}
}, function(err, client) {
	if (err) {
		console.log(err);
	} else {
		client.setSecurity(new ClientSSLSecurityPFX(certLoc, 'qwerty123'));
		console.log(client.describe());
		soapclient = client;
	}
});
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended : false
}))

// parse application/json
app.use(bodyParser.json())
app.listen(8080);

app.get('/test', function(req, res) {
	var auth = Promise.denodeify(soapclient.Authenticate);
	auth({
		personalNumber : '123456789'
	}).then(function(result) {
		res.send(result);
	}, function(err) {
		res.send(err);
	});
});