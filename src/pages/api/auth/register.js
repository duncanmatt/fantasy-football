import connectDB from '../../../../lib/connectDB';
import { hash, genSalt, } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../../../../models/User';

export default async function handler(req, res) {
	await connectDB();

	const { method } = req;
	const { username, password } = req.body;

	switch (method) {

		// @desc   Resister a new user
		// @route  /api/users
		// @access Public
		case 'POST':
			try {
				// create new model
				// if (!username || !password || !password2) {
				// 	res.status(400);
				// 	throw new Error('Please include all fields');
				// }

				const userExists = await User.findOne({ username });

				if (userExists) {
					res.status(400);
					throw new Error('User already exists');
				}

				const salt = await genSalt(10);
				const hashedPassword = await hash(password, salt);

				const user = await User.create({
					username,
					password: hashedPassword,
				});

				if (user) {
					res.status(201).json({
						_id: user._id,
						username: user.username,
						password: user.password,
						// token: generateToken(user._id),
					});
				}
			} catch (error) {
				res.send(error);
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
