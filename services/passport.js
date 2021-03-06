const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

// We dont requre the model we created in passport.js, because it might cause problems
// when testing later on. Since it's loaded into mongose, we simply extract it.
const User = mongoose.model('users');

//The user.id below is the mogoDB entry ID, som not the googleId.
passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				// user already exists
				return done(null, existingUser);
			}

			const user = await new User({ googleId: profile.id }).save(); //The .save saves it to our our mongoDB
			done(null, user);
		}
	)
);
