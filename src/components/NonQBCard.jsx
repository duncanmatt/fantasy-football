import Image from 'next/image';
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
	return (
		<div className={styles.player}>
			<div className={styles.upper}>
				<div className={styles.hsContainer}>
					<Image
						src={imgUrl}
						quality={50}
						placeholder='blur'
						blurDataURL={imgUrl}
						className={styles.headshot}
						fill
						sizes="(max-width: 800px) 300px,
										(min-width: 800px) 400px"
						alt={name}
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
						<span>Rec Yards:</span> {rec_yards}
					</div>
					<div className={styles.stat}>
						<span>Receptions:</span> {receptions}
					</div>
					<div className={styles.stat}>
						<span>Rec TDs:</span> {rec_TDs}
					</div>
					<div className={styles.stat}>
						<span>Rush Yards:</span> {run_yards}
					</div>
					{position === 'RB' && (
						<div className={styles.stat}>
							<span>Rush Attempts:</span> {run_attempts}
						</div>
					)}
					<div className={styles.stat}>
						<span>Rush TDs:</span> {run_TDs}
					</div>
					<div className={styles.stat}>
						<span>FUMs:</span> {FUMs}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NonQBCard;
