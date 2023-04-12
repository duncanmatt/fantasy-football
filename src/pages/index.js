import Sleepers from '../components/Sleepers';
import Transactions from '../components/Transactions';
import Handcuffs from '../components/Handcuffs';
import News from '../components/News';
import Layout from '../components/Layout';
import { Divider } from 'antd';
import styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<Layout>
			<main className={styles.main}>
				<section className={styles.landing}>
					<Transactions />
					<div className={styles.newsWrapper}>
						<h2>Latest</h2>
						<Divider style={{ backgroundColor: '#000' }} />
						<News />
					</div>
				</section>
				<div className={styles.sleepersWrapper}>
					<h2>2023 Sleepers</h2>
					<Divider style={{ backgroundColor: '#000' }} />
					<Sleepers />
				</div>
				<div className={styles.handcuffsWrapper}>
					<h2>2023 Handcuffs</h2>
					<Divider style={{ backgroundColor: '#000' }} />
					<Handcuffs />
				</div>
			</main>
		</Layout>
	);
};

export default Home;
