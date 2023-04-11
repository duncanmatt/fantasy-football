/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.www.nfl.com'
			},
			{
				protocol: 'https',
				hostname: 'serpapi.com'
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com'
			}
		]
	}
};

module.exports = nextConfig;
