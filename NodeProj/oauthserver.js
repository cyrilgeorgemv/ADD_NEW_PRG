var oauth2orize = require('oauth2orize'), passport = require('passport'), db = require(
		'./db').db(), crypto = require('crypto'), utils = require("./utils"), bcrypt = require('bcrypt')

// create OAuth 2.0 server
var server = oauth2orize.createServer();

// Resource owner password
server.exchange(oauth2orize.exchange.password(function(client, username,
		password, scope, done) {
	done(null, 'a', 'a', {
		expires_in : new Date()
	});
}))

// Refresh Token
server.exchange(oauth2orize.exchange.refreshToken(function(client,
		refreshToken, scope, done) {
	done(null, 'a', 'a', {
		expires_in : new Date()
	});
}))

// token endpoint
exports.token = [ passport.authenticate([ 'clientBasic', 'clientPassword' ], {
	session : false
}), server.token(), server.errorHandler() ]