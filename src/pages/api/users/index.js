import connectDB from '../../../../lib/connectDB';
import { hash, genSalt, compare } from 'bcryptjs';
import { getToken } from 'next-auth/jwt';

import User from '../../../../models/User';

export default async function handler(req, res) {
	const { method } = req;
	const { username, password } = req.body;

	await connectDB();

	switch (method) {
		case 'GET':
			try {
				// find user
				const user = await User.find({ username });
				if (user && (await compare(password, user.password))) {
					res.status(200).json({
						success: true,
						data: user,
					});
				}
			} catch (error) {
				res.status(401);
				throw new Error('Invalid Credentials');
			}
			break;
		case 'POST':
			try {
				// create new model
				const user = await User.create(req.body);
				res.status(201).json({ success: true, data: user });
			} catch (error) {
				res.staus(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
