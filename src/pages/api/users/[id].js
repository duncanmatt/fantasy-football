import dbConnect from '../../../../lib/connectDB';
import User from '../../../../models/User';

export default async function handler(req, res) {
	const {
		query: { id },
		method,
	} = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const user = await User.findById(id);
				if (!user) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json(user);
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
