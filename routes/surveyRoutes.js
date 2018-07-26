const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

// To avoid issues wit reading from the model several times,
// We take the safe route and get the model before acessing it.
const Survey = mongoose.model('surveys');

module.exports = app => {
	app.post('api/surveys', requireLogin, requireCredits, (req, res) => {
		const { title, subject, body, recipients } = req.body;

		// { title: title } is, with ES6 destructuring = { title }. Both key and value.
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});
	});
};

// Recipient takes a long string of comma separated emails, and returns a
// list of objects with email as the key, and the trimmed (remove spaces in
// the beginning and end) email itself as the value.
