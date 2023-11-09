import dbConnect from '../../../../lib/connectDB';
import { getJson } from 'serpapi';

export default async function handler(req, res) {
  await dbConnect();

  const {
    query: { name },
    method,
  } = req;

  const params = {
    api_key: process.env.SERP_API_KEY,
    q: { name },
    location: 'United States',
    google_domain: 'google.com',
    gl: 'us',
    hl: 'en',
    tbm: 'nws',
  };

  switch (method) {
    case 'GET':
      try {
        const response = await getJson('google', params);
        if (!response) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
