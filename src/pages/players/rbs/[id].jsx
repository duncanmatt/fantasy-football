import connectDB from '../../../../lib/connectDB';
import Rb from '../../../../models/Rb';
import useSWR from 'swr';
import Layout from '../../../components/Layout';
import NonQBCard from '../../../components/NonQBCard';
import { Skeleton } from 'antd';
import styles from '../../../styles/Player.module.css';
import Link from 'next/link';

const fetcher = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const PlayerPage = ({ player }) => {
  const { data, error, isLoading } = useSWR(
    `/api/news/${player.name}`,
    fetcher
  );

  if (error) return <div>ERROR</div>;

  return (
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
          {isLoading || !data ? (
            <Skeleton />
          ) : (
            data.map((article) => (
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

  const player = await Rb.findById(params.id).lean();
  player._id = player._id.toString();
  const [name, team] = player.name.split('(');
  player._id = player._id.toString();
  player.name = name.trim();
  player.team = team.slice(0, -1);

  return { props: { player } };
}
