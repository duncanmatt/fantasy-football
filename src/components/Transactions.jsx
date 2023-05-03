import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import transactions from '../transactions.json';
import styles from '../styles/Home.module.css';

const Transactions = () => {
	return (
		<div className={styles.transactions}>
			<div className={styles.tradesHeader}>
				<h3>Recent Trades</h3>
			</div>
			<div className={styles.transactionsSlide}>
				{transactions.map(transaction => (
					<div
						className={styles.transaction}
						key={transaction.id}>
						<picture>
							<Image
								className={styles.headshot}
								alt={transaction.name}
								src={transaction.headshot}
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
											alt={transaction.prevTeam}
											src={transaction.prevLogo}
											width={50}
											height={50}
										/>
									</picture>
								</div>
								<ArrowRightOutlined />
								<div className={styles.tradeNew}>
									<picture>
										<Image
											alt={transaction.newTeam}
											src={transaction.newLogo}
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
