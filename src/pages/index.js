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
						<div className={styles.heading}>Latest <span className={styles.dNews}>News</span></div>
						<News />
						<Divider style={{backgroundColor: 'rgb(217,217,217'}} />
					</div>
				</section>
				<div className={styles.sleepersWrapper}>
					<div className={styles.heading}>Sleepers</div>
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
