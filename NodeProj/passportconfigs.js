var passport = require('passport');
var ResourceOwnerPasswordStrategy = require('passport-oauth2-resource-owner-password').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;

passport.use("clientPassword", new ResourceOwnerPasswordStrategy(function(
		clientId, clientSecret, done) {
	return done(null, client);
}));

/**
 * This strategy is used to authenticate users based on an access token (aka a
 * bearer token).
 */
passport.use("accessToken", new BearerStrategy(function(accessToken, done) {
	done(null, user, info);
}))