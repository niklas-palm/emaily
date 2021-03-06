const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

//requireLogin is a simple check to see that the user is logged in that we import
//instead of having to write the commented lines below every time we check for a user.
module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		// if (!req.user) {
		// 	return res.status(401).send({ error: 'You must log in!' });
		// }
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5 dollar for 5 credits.',
			source: req.body.id
		});

		req.user.credits += 5;
		const user = await req.user.save();

		res.send(user);
	});
};
