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
						<h4>Pass Yards</h4> {pass_yards}
					</div>
					<div className={styles.stat}>
						<h4>Completions</h4> {completions}
					</div>
					<div className={styles.stat}>
						<h4>Pass Attempts</h4> {pass_attempts}
					</div>
					<div className={styles.stat}>
						<h4>Pass TDs</h4> {pass_TDs}
					</div>
					<div className={styles.stat}>
						<h4>INTs</h4> {INTs}
					</div>
					<div className={styles.stat}>
						<h4>Rush Yards</h4> {run_yards}
					</div>
					<div className={styles.stat}>
						<h4>Rush Attempts</h4> {run_attempts}
					</div>
					<div className={styles.stat}>
						<h4>Rush TDs</h4> {run_TDs}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QBCard;
