import connectDB from '../../../../lib/connectDB';
import Player from '../../../../models/Player';

export default async function handler(req, res) {
	await connectDB();
	if (req.method === 'GET') {
		try {
			const response = await Player.find({ move: true }).lean();
			if (!response) {
				return res.status(400).json({ success: false });
			}
		
      res.status(200).send(response);
    
		} catch (error) {
			res.status(400).json({ success: false, message: error });
		}
	}
}
