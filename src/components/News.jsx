import useSWR from 'swr';
import { Skeleton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const fetcher = async url => {
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

const News = () => {
	const { data, error, isLoading } = useSWR('/api/news', fetcher);

	if (error) return <div>ERROR</div>;

	if (isLoading) return <div className={styles.news}> <Skeleton  /></div>;

	return (
		<div className={styles.news}>
			{data.map(article => (
				<Link
					href={article.link}
					className={styles.article}
					key={article.position}>
					<div className={styles.thumbnailWrapper}>
						<picture>
							<Image
								className={styles.thumbnail}
								alt={article.title}
								src={article.thumbnail}
								height={92}
								width={92}
							/>
						</picture>
						<span className={styles.date}>{article.date}</span>
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
