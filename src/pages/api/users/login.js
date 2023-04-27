import connectDB from '../../../../lib/connectDB';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import User from '../../../../models/User';

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
	await connectDB();

	const { username, password } = req.body;

	const user = await User.findOne({ username }).lean();

	// Check user and passwords match
	if (user && (await compare(password, user.password))) {
		const token = sign(
			{
				exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
				username: username,
			},
			secret,
		);

		const serialized = serialize('OursiteJWT', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30,
			path: '/',
		});

		res.setHeader('Set-Cookie', serialized);

		res.status(200).json({ message: 'Success', user: user._id });
	} else {
		res.status(401);
		console.log(password, user.password);
		throw new Error('Invalid credentials');
	}
}


