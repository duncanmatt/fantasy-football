import connectDB from '../../../../lib/connectDB';
import Waiver from '../../../../models/Waiver';

export default async function handler(req, res) {
  await connectDB();
  if (req.method === 'GET') {
    try {
      const response = await Waiver.find({}).lean();
      if (!response) {
        return res.status(400).json({ success: false });
      }
      console.log(response);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  }
}
