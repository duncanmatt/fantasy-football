import '@/styles/globals.css';
import Head from 'next/head';
import Nav from '../../components/Nav';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>NFL Fantasy</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Nav />
			<Component {...pageProps} />
		</>
	);
}
