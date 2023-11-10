import Transactions from '../components/Transactions';
import News from '../components/News';
import WaiverWinners from '../components/WaiverWinners';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = ({ articles }) => {
  return (
    <>
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
          {/* <div className={styles.waiverWinnersWrapper}>
            <div className={styles.heading}>Waiver Winners</div>
            <WaiverWinners />
          </div> */}
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    process.env.NODE_ENV === 'development'
      ? `http://${ctx.req?.headers.host}/api/news`
      : `https://${ctx.req?.headers.host}/api/news`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();

  return { props: { articles: data } };
}

export default Home;
