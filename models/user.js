const mongoose = require('mongoose');
const { Schema } = mongoose; //const Schema = mongoose.Schema;

//The architecture or schema for our mongoDB
const userSchema = new Schema({
	googleId: String
});

//Use the userSchema and create a new model (collection) called users and load
// it into mongoose
mongoose.model('users', userSchema);
