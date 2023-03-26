import connectDB from '../../../../lib/connectDB';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../../../../models/User';

export default async function handler(req, res) {
	await connectDB();

	const { method } = req;
	const { username, password } = req.body;

	switch (method) {
		// @desc   Login a new user
		// @route  /api/users
		// @access Public
		case 'POST':
			const user = await User.findOne({ username });

			// Check user and passwords match
			if (user && (await compare(password, user.password))) {
				res.status(200).json({
					_id: user._id,
					username: user.username,
					password: user.password,
					token: generateToken(user._id),
				});
			} else {
				res.status(401);
				console.log(password, user.password);
				throw new Error('Invalid credentials');
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
}

const generateToken = id => {
	return sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
};
