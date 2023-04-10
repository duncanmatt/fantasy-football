import connectDB from '../../../lib/connectDB';
import Player from '../../../models/Player';
import { getJson } from 'serpapi';
import Layout from '../../components/Layout';
import QBCard from '../../components/QBCard';
import NonQBCard from '../../components/NonQBCard';
import { Spin } from 'antd';
import styles from '../../styles/Player.module.css';
import Link from 'next/link';

const PlayerPage = ({ player, news }) => {
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
			<div className={styles.news}>
				<h3 className={styles.newsHead}>Latest News</h3>
				<div className={styles.articles}>
					{!news ? (
						<Spin />
					) : (
						news.map(article => (
							<Link
								key={article.position}
								className={styles.article}
								href={article.link}>
								<h4 className={styles.title}>{article.title}</h4>
								<p className={styles.articleDesc}>{article.snippet}</p>
								<h6 className={styles.articleSrc}>
									{article.source} - {article.date}
								</h6>
							</Link>
						))
					)}
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ params }) {
	await connectDB();

	const player = await Player.findById(params.id).lean();
	player._id = player._id.toString();

	const newsParams = {
		api_key: process.env.SERP_API_KEY,
		q: player.name,
		location: 'United States',
		google_domain: 'google.com',
		gl: 'us',
		hl: 'en',
		tbm: 'nws',
		num: '8',
	};

	const news = await getJson('google', newsParams);

	return { props: { player, news: news['news_results'] } };
}

export default PlayerPage;
