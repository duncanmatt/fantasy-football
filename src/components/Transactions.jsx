import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import transactions from '../transactions.json';
import styles from '../styles/Home.module.css';

const Transactions = () => {
	return (
		<div className={styles.transactions}>
			<h3>Recent Trades</h3>
			<div className={styles.transactionsSlide}>
				{transactions.map(transaction => (
					<div
						className={styles.transaction}
						key={transaction.id}>
						<h4 className={styles.tradeName}>{transaction.name}</h4>
						<div className={styles.tradeTeams}>
							<div className={styles.tradeOld}>
								<span>{transaction.prevTeam}</span>
								<picture>
									<Image
										alt={transaction.prevTeam}
										src={transaction.prevLogo}
										width={80}
										height={80}
									/>
								</picture>
							</div>
							<ArrowRightOutlined />
							<div className={styles.tradeNew}>
								<span>{transaction.newTeam}</span>
								<picture>
									<Image
										alt={transaction.newTeam}
										src={transaction.newLogo}
										width={80}
										height={80}
									/>
								</picture>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Transactions;
