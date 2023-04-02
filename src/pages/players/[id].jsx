import connectDB from '../../../lib/connectDB';
import Player from '../../../models/Player';
import Layout from '../../components/Layout';
import QBCard from '../../components/QBCard';
import NonQBCard from '../../components/NonQBCard';
import styles from '../../styles/Player.module.css';

const PlayerPage = ({ player }) => {
	return (
		<Layout key={player._id}>
			{player.position === 'QB' ? (
				<QBCard
					name={player.name}
					imgUrl={player.imgUrl}
					pass_yards={player.pass_yards}
					pass_attempts={player.pass_attempts}
					run_yards={player.run_yards}
					run_attempts={player.run_attempts}
					run_TDs={player.run_TDs}
					completions={player.completions}
					pass_TDs={player.TDs}
					INTs={player.INTs}
				/>
			) : (
				<NonQBCard
					name={player.name}
					position={player.position}
					imgUrl={player.imgUrl}
					rec_yards={player.rec_yards}
					receptions={player.receptions}
					rec_TDs={player.rec_TDs}
					run_yards={player.run_yards}
					run_attempts={player.run_attempts}
					run_TDs={player.run_TDs}
					FUMs={player.FUMs}
				/>
			)}
		</Layout>
	);
};

export async function getServerSideProps({ params }) {
	await connectDB();

	const player = await Player.findById(params.id).lean();
	player._id = player._id.toString();

	return { props: { player } };
}

export default PlayerPage;
