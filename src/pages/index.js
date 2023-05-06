import connectDB from '../../lib/connectDB';
import Player from '../../models/Player';
import Transactions from '../components/Transactions';
import News from '../components/News';
import Sleepers from '../components/Sleepers';
import Layout from '../components/Layout';
import { Divider, Spin } from 'antd';
import styles from '../styles/Home.module.css';

const Home = ({ sleepers }) => {
	return (
		<Layout>
			<main className={styles.main}>
				<section className={styles.landing}>
					<Transactions />
					<div className={styles.newsWrapper}>
						<h2 className={styles.heading}>Latest News</h2>
						<News />
						<Divider style={{backgroundColor: 'rgb(217,217,217'}} />
					</div>
				</section>
				<div className={styles.sleepersWrapper}>
					<h2 className={styles.heading}>2023 Sleepers</h2>
					{sleepers ? <Sleepers players={sleepers} /> : <Spin />}
				</div>
			</main>
		</Layout>
	);
};

export async function getServerSideProps() {
	await connectDB();

	const sleepersResult = await Player.find({ sleeper: true });

	const sleepers = sleepersResult.map(doc => {
		const sleeper = doc.toObject();
		sleeper._id = sleeper._id.toString();
		return sleeper;
	});

	return { props: { sleepers: sleepers } };
}

export default Home;
