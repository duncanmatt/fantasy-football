
import Sleepers from '../components/Sleepers';
import Handcuffs from '../components/Handcuffs';
// import News from '../components/News';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = ({ }) => (
	<Layout>
		<main className={styles.main}>
			<div className={styles.sleepers}>
				<Sleepers />
			</div>
			<div className={styles.handcuffs}>
				<Handcuffs />
			</div>
		</main>
	</Layout>
);



export default Home;
