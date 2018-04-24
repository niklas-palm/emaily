//require instead of import because node uses "common JS modules" (as of creatoin of SG-course)
const express = require('express');
const app = express();
// The express application represents a running express app
// The app object is used to set up configuration that will listen fo incoming requests
// that are being routed from the node-side to the express-side and then route these requests
// to different request handlers. All route handlers that we create will be associated
// or "registred" with this app object.

//Below code snippet is a route handler
// Section 2 Lecture 11 on SG:s course goes into the specifics
app.get('/', (req, res) => {
	res.send({ bye: 'buddy' });
});

// Look at the underlying environment and see if there's a port dedicated
// for my server. Otherwise, use 5000
const PORT = process.env.PORT || 5000;
// Express tells node to listen on this port. if run locally and 5000
// is entered, then localhost:5000 is the place to go.
app.listen(PORT);
