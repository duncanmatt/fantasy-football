import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { ArrowRightOutlined } from '@ant-design/icons';
import transactions from '../transactions.json';
import styles from '../styles/Home.module.css';

const Transactions = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

	return (
		<div className={styles.transactions}>
			<div className={styles.tradeHeader}>
				<h3>Recent Trades</h3>
			</div>
			<div className={styles.transactionsSlide}>
				{transactions.map(transaction => (
					<div
						className={styles.transaction}
						key={transaction.id}>
						<div className={styles.playerIdentity}>
							<h4 className={styles.tradeName}>{transaction.name}</h4>
							<picture>
								<Image
									className={styles.headshot}
									alt={transaction.name}
									src={transaction.headshot}
									width={isMobile ? 55 : 80}
									height={isMobile ? 55 : 80}
								/>
							</picture>
						</div>
						<div className={styles.tradeTeams}>
							<div className={styles.tradeOld}>
								<picture>
									<Image
										alt={transaction.prevTeam}
										src={transaction.prevLogo}
										width={isMobile ? 50 : 80}
										height={isMobile ? 50 : 80}
									/>
								</picture>
							</div>
							<ArrowRightOutlined />
							<div className={styles.tradeNew}>
								<picture>
									<Image
										alt={transaction.newTeam}
										src={transaction.newLogo}
										width={isMobile ? 50 : 80}
										height={isMobile ? 50 : 80}
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
