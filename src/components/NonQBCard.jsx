import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { CaretLeftOutlined } from '@ant-design/icons';
import styles from '../styles/Player.module.css';

const NonQBCard = ({
	name,
	position,
	imgUrl,
	rec_yards,
	run_yards,
	run_attempts,
	run_TDs,
	receptions,
	rec_TDs,
	FUMs,
}) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 800px)',
	});

	return (
		<div className={styles.player}>
			<Link
				className={styles.back}
				href={`/${position}s`}>
				<CaretLeftOutlined />
				{position}s
			</Link>
			<div className={styles.upper}>
				<div className={styles.hsContainer}>
					<Image
						priority
						placeholder='blur'
						blurDataURL={imgUrl}
						className={styles.headshot}
						fill
						alt={name}
						src={imgUrl}
					/>
				</div>
				<div className={styles.info}>
					<b>{name}</b>
					&nbsp;|&nbsp;{position}
				</div>
			</div>
			<div className={styles.lower}>
				<div className={styles.stats}>
					<div className={styles.stat}>
						<h4>Rec Yards</h4> {rec_yards}
					</div>
					<div className={styles.stat}>
						<h4>Receptions</h4> {receptions}
					</div>
					<div className={styles.stat}>
						<h4>Rec TDs</h4> {rec_TDs}
					</div>
					<div className={styles.stat}>
						<h4>Rush Yards</h4> {run_yards}
					</div>
					{position === 'RB' && (
						<div className={styles.stat}>
							<h4>Rush Attempts</h4> {run_attempts}
						</div>
					)}
					<div className={styles.stat}>
						<h4>Rush TDs</h4> {run_TDs}
					</div>
					<div className={styles.stat}>
						<h4>FUMs:</h4> {FUMs}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NonQBCard;
