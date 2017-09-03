var express = require('express');
var reqId = require('express-request-id')();
var app = express();
app.use(reqId);
app.use(function(req, res, next) {
	console.log(JSON.stringify(req.params));
	next();
	console.log(req.id);
	next();
});
app.get("/", function(req, res) {
	res.send('working');
});
app.listen(3000);
