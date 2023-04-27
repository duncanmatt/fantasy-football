import dbConnect from '../../../../lib/connectDB';
import User from '../../../../models/User';

export default async function handler(req, res) {
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case 'GET':
			try {

				await dbConnect();
				const user = await User.findById(id).lean();
				if (!user) {
					res
						.status(400)
						.json({ message: 'unable to find user', success: false });
				}
				res
					.status(200)
					.json({
						_id: user._id.toString(),
						username: user.username,
						password: user.password,
					});
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
