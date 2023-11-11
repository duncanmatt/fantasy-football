import Transactions from '../components/Transactions';
import { getJson } from 'serpapi';
import News from '../components/News';
import WaiverWinners from '../components/WaiverWinners';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { SWRConfig } from 'swr';

const Home = ({ articles, fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <main className={styles.main}>
          <section className={styles.landing}>
            <Transactions />
            <div className={styles.newsWrapper}>
              <div className={styles.heading}>
                Latest <span className={styles.dNews}>News</span>
              </div>
              <News articles={articles} />
            </div>
          </section>
          <div className={styles.waiverWinnersWrapper}>
            <div className={styles.heading}>Waiver Winners</div>
            <WaiverWinners />
          </div>
        </main>
      </Layout>
    </SWRConfig>
  );
};

export default Home;

export async function getStaticProps(ctx) {
  const newsParams = {
    api_key: process.env.SERP_API_KEY,
    q: 'NFL fantasy',
    gl: 'us',
    hl: 'en',
    tbm: 'nws',
    as_qdr: 'd1',
    lr: 'en',
  };

  const res = await getJson('google', newsParams);

  const data = await res.news_results;
  const url = res.search_metadata.google_url;

  return {
    props: {
      articles: data,
      fallback: {
        [url]: data,
      },
    },
  };
}
