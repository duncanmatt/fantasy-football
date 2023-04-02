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
				<Image
					className={styles.upperImg}
					priority
					width={300}
					height={300}
					style={{
						objectFit: 'contain',
						height: 'auto',
						borderRadius: '66%',
					}}
					alt={name}
					src={imgUrl}
				/>
				<div className={styles.info}>
					<h3>{name}</h3>
					<p>{position}</p>
				</div>
			</div>
			<div className={styles.lower}>
				<div className={styles.stats}>
					<p>Rec Yards: {rec_yards}</p>
					<p>Receptions: {receptions}</p>
					<p>Rec TDs: {rec_TDs}</p>
					<p>Rush Yards: {run_yards}</p>
					<p>Rush Attempts: {run_attempts}</p>
					<p>Rush TDs: {run_TDs}</p>
					<p>FUMs: {FUMs}</p>
				</div>
			</div>
		</div>
	);
};

export default NonQBCard;
