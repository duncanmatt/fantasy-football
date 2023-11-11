import connectDB from '../../../../lib/connectDB';
import Qb from '../../../../models/Qb';
import { getJson } from 'serpapi';
import Layout from '../../../components/Layout';
import QBCard from '../../../components/QBCard';
import { Skeleton } from 'antd';
import styles from '../../../styles/Player.module.css';
import Link from 'next/link';

const PlayerPage = ({ player, news }) => {
  return (
    <Layout key={player._id}>
      {player ? (
        <QBCard
          name={player.name}
          imgurl={player.imgurl}
          pass_yards={player.pass_yds}
          pass_attempts={player.pass_atts}
          run_yards={player.rush_yds}
          run_attempts={player.rush_atts}
          run_TDs={player.rush_tds}
          completions={player.completions}
          pass_TDs={player.pass_tds}
          INTs={player.interceptions}
        />
      ) : (
        <Skeleton />
      )}
      <div className={styles.news}>
        <h3 className={styles.newsHead}>latest updates</h3>
        <div className={styles.articles}>
          {!news ? (
            <Skeleton />
          ) : (
            news.map((article) => (
              <Link
                key={article.position}
                className={styles.article}
                href={article.link}
              >
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

export default PlayerPage;

export async function getServerSideProps({ params }) {
  await connectDB();

  const player = await Qb.findById(params.id).lean();
  player._id = player._id.toString();
  const [name, team] = player.name.split('(');
  player._id = player._id.toString();
  player.name = name.trim();
  player.team = team.slice(0, -1);

  const newsParams = {
    api_key: process.env.SERP_API_KEY,
    q: name,
    location: 'United States',
    google_domain: 'google.com',
    gl: 'us',
    hl: 'en',
    tbm: 'nws',
    num: '8',
  };

  const newsRes = await getJson('google', newsParams);
  const news = await newsRes.news_results;

  return { props: { player, news } };
}
