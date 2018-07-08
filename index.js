//require instead of import because node uses "common JS modules" (as of creatoin of SG-course)
const express = require('express');
const mongoose = require('mongoose'); // helps deal with mongDB
const cookieSession = require('cookie-session'); // give us access to cookies
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
//Instead of writing everything in index.js, we divide the contents into services and routes
//aswell. Simply requireing, like below, inserts the code in that file, into this one. I think
require('./models/user');
require('./services/passport');
mongoose.connect(keys.mongoURI);

// The express application represents a running express app
// The app object is used to set up configuration that will listen fo incoming requests
// that are being routed from the node-side to the express-side and then route these requests
// to different request handlers. All route handlers that we create will be associated
// or "registred" with this app object.
// Section 2 Lecture 11 on SG:s node/react course goes into the specifics of a routehandler
const app = express();

//app.use specifies niddleware. It preprocesses the incoming requests before they are
//sent to our different routehandlers.
app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

// Since authRoutes makes use of the "app" object, we simply can't include that code like we do
// above with passport. We require the module (that is being exported from authroutes)
// as a function, and call it with the app object
// equivalent to: require('./routes/authRoutes')(app);
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');

// Calling the routes function (our routehandlers), which uses the app object
authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === 'production') {
	//Express will serve up production assets like our main.js or main.js file.
	app.use(express.static('client/build'));

	//Express will serve up the index.htlm if it doesn't recognie the route.
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Look at the underlying environment and see if there's a port dedicated
// for my server. Otherwise, use 5000
const PORT = process.env.PORT || 5000;
// Express tells node to listen on this port. if run locally and 5000
// is entered, then localhost:5000 is the place to go.
app.listen(PORT);
