import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
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
	const isMobile = useMediaQuery({
		query: '(max-width: 600px)',
	});


	return (
		<div className={styles.player}>
			<Link href='/QBs'>back to QBs</Link>
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
					&nbsp;|&nbsp;QB
				</div>
			</div>
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
			<div className={styles.news}>
				<h3>News</h3>
			</div>
		</div>
	);
};

export default QBCard;
