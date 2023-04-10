import { getJson } from 'serpapi';

export default async function handler(req, res) {
	const { method } = req;

	const newsParams = {
		api_key: process.env.SERP_API_KEY,
		q: 'NFL',
		location: 'United States',
		google_domain: 'google.com',
		gl: 'us',
		hl: 'en',
		tbm: 'nws',
		num: '8',
	};

	switch (method) {
		case 'GET':
			try {
				const response = await getJson('google', newsParams);

				return response
					? res.status(200).json(response['news_results'])
					: res.status(404).json({ message: 'error receiving news' });
			} catch (error) {
				console.error(error);
				res.status(400).json({ success: false });
			}
			break;

		default:
			res.status(400).json({ success: false });
	}
}
