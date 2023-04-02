import dbConnect from '../../../../lib/connectDB';
import Player from '../../../../models/Player';
import {useRouter} from 'next/router'

export default async function handler(req, res) {
	const {
		query: { name },
		method,
	} = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const player = await Player.findOne(name);
				if (!player) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json(player);
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}