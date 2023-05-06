import Image from 'next/image';
import { Spin } from 'antd';
import {CaretRightOutlined} from '@ant-design/icons'
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
	const {
		data: transactions,
		error,
		isLoading,
	} = useSWR('api/players/transactions', fetcher);

	if (error) return <div>ERROR</div>;

	if (isLoading) return <Spin />;

	return (
		<div className={styles.transactions}>
			<div className={styles.tradesHeader}>
				<h3>moves</h3>
			</div>
			<div className={styles.transactionsSlide}>
				{transactions?.map(transaction => (
					<div
						className={styles.transaction}
						key={transaction._id}>
						<div className={styles.tradeBody}>
							<span className={styles.tradeName}>{transaction.name}</span>
							<CaretRightOutlined />
									<Image
										priority={true}
										alt={transaction.team[0]}
										src={transaction.team[1]}
										placeholder='blur'
										blurDataURL={transaction.team[1]}
										width={40}
										height={40}
									/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Transactions;
