import useSWR from 'swr';
import { Skeleton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const News = ({ articles }) => {
  if (!articles)
    return (
      <div className={styles.news}>
        <Skeleton />
      </div>
    );

  return (
    <div className={styles.news}>
      {articles.map((article) => (
        <Link
          href={article.link}
          className={styles.article}
          key={article.position}
        >
          <div className={styles.thumbnailWrapper}>
            <Image
              className={styles.thumbnail}
              alt={article.title}
              src={article.thumbnail}
              placeholder={'blur'}
              blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
              height={92}
              width={92}
            />
            <div className={styles.info}>
              <span className={styles.date}>{article.date}</span>
              <span className={styles.source}>{article.source}</span>
            </div>
          </div>
          <div>
            <h2 className={styles.title}>{article.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default News;
