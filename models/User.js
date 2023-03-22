const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please add a name'],
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.models.User || mongoose.model('User', userSchema);