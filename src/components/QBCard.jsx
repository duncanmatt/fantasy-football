import Image from 'next/image';
import styles from '../styles/Player.module.css';

const QBCard = ({
	name,
	imgUrl,
	pass_yards,
	pass_attempts,
	run_yards,
	run_attempts,
	run_TDs,
	completions,
	pass_TDs,
	INTs,
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
					&nbsp;|&nbsp;QB
				</div>
			</div>
			<div className={styles.lower}>
				<div className={styles.stats}>
					<div className={styles.stat}>
						<span>Pass Yards:</span> {pass_yards}
					</div>
					<div className={styles.stat}>
						<span>Completions:</span> {completions}
					</div>
					<div className={styles.stat}>
						<span>Pass Attempts:</span> {pass_attempts}
					</div>
					<div className={styles.stat}>
						<span>Pass TDs:</span> {pass_TDs}
					</div>
					<div className={styles.stat}>
						<span>INTs:</span> {INTs}
					</div>
					<div className={styles.stat}>
						<span>Rush Yards:</span> {run_yards}
					</div>
					<div className={styles.stat}>
						<span>Rush Attempts:</span> {run_attempts}
					</div>
					<div className={styles.stat}>
						<span>Rush TDs:</span> {run_TDs}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QBCard;
