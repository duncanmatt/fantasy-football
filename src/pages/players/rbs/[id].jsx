import connectDB from '../../../../lib/connectDB';
import Rb from '../../../../models/Rb';
import { getJson } from 'serpapi';
import Layout from '../../../components/Layout';
import NonQBCard from '../../../components/NonQBCard';
import { Skeleton } from 'antd';
import styles from '../../../styles/Player.module.css';
import Link from 'next/link';
import Seo from '../../../components/Seo';

const PlayerPage = ({ player, news }) => {
  return (
    <>
      <Seo
        title={`${player.name} latest stats and news`}
        desc={`View current stats and most recent news for ${player.team} RB, ${player.name}.`}
      />
      <Layout key={player._id}>
        {player ? (
          <NonQBCard
            name={player.name}
            position='RB'
            imgurl={player.imgurl}
            rec_yds={player.rec_yds}
            receptions={player.receptions}
            rec_tds={player.rec_tds}
            rush_yds={player.rush_yds}
            rush_atts={player.rush_atts}
            rush_tds={player.rush_tds}
            fumbles={player.fumbles}
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
    </>
  );
};

export default PlayerPage;

export async function getServerSideProps({ params }) {
  await connectDB();

  const player = await Rb.findById(params.id).lean();
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
