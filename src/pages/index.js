import Sleepers from '../components/Sleepers';
import Handcuffs from '../components/Handcuffs';
import News from '../components/News';
import Layout from '../components/Layout';
import { Divider } from 'antd';
import styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<Layout>
			<main className={styles.main}>
				<section className={styles.newsWrapper}>
					<h2>Latest</h2>
					<Divider style={{ backgroundColor: '#000' }} />
					<News />
				</section>
				<section className={styles.sleepersWrapper}>
					<h2>2023 Sleepers</h2>
					<Divider style={{ backgroundColor: '#000' }} />
					<Sleepers />
				</section>
				<section className={styles.handcuffsWrapper}>
					<h2>2023 Handcuffs</h2>
					<Divider style={{ backgroundColor: '#000' }} />
					<Handcuffs />
				</section>
			</main>
		</Layout>
	);
};

export default Home;
