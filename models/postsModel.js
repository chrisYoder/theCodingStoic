const mongoose = require('mongoose'),
	  Comment = require('./commentModel');

const postSchema = new mongoose.Schema({
	text: String, 
	createdAt: {
		type: Date, 
		default: Date.now
	}, 
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}, 
		username: String
	}, 
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}
	]
	
});

module.exports = mongoose.model('posts', postSchema);