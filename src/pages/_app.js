import Head from 'next/head';
import Nav from '../components/Nav';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
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
};

export default App;
