import connectDB from '../../lib/connectDB';
import Player from '../../models/Player';
import News from '../components/News';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = ({ players }) => (
	<Layout>
		<main className={styles.main}>
			<div className={styles.news}>
				<h2>LATEST NEWS</h2>
				<News />
			</div>

			<div className={styles.grid}>
				{players?.map(player => (
					<div className={styles.card}
						key={player._id}>
						<p>{player.name}</p>
						<p>{player.position}</p>
						<p>{player.team}</p>
					</div>
				))}
			</div>
		</main>
	</Layout>
);

// retrieve player data
export async function getServerSideProps(context) {
	await connectDB();

	const playersResult = await Player.find({ position: 'WR' }).limit(10);
	const players = playersResult.map(doc => {
		const player = doc.toObject();
		player._id = player._id.toString();
		return player;
	});

	return { props: { players: players } };
}

export default Home;
