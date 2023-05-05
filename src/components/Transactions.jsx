import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';


const fetcher = async url => {
	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}
	return data;
};


const Transactions = () => {
	const {data: transactions, error, isLoading} =  useSWR('api/players/transactions', fetcher);

	if (error) return <div>ERROR</div>;

	if (isLoading) return <Spin />;

	return (
		<div className={styles.transactions}>
			<div className={styles.tradesHeader}>
				<h3>Recent Trades</h3>
			</div>
			<div className={styles.transactionsSlide}>
				{transactions?.map(transaction => (
					<div
						className={styles.transaction}
						key={transaction.id}>
						<picture>
							<Image
								className={styles.headshot}
								alt={transaction.name}
								src={transaction.imgUrl}
								width={60}
								height={60}
								quality={50}
							/>
						</picture>
						<div className={styles.tradeBody}>
							<div className={styles.tradeName}>
								<h4 className={styles.tradeName}>{transaction.name}</h4>
							</div>
							<div className={styles.tradeTeams}>
								<div className={styles.tradeOld}>
									<picture>
										<Image
											alt={transaction.prev_team[0]}
											src={transaction.prev_team[1]}
											width={50}
											height={50}
										/>
									</picture>
								</div>
								<ArrowRightOutlined />
								<div className={styles.tradeNew}>
									<picture>
										<Image
											alt={transaction.team[0]}
											src={transaction.team[1]}
											width={50}
											height={50}
										/>
									</picture>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Transactions;
