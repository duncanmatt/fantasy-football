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
		<>
			<Image
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
			<h3>{name}</h3>
			<p>QB</p>
			<p>Pass Yards: {pass_yards}</p>
			<p>Completions: {completions}</p>
			<p>Pass Attempts: {pass_attempts}</p>
			<p>Pass TDs: {pass_TDs}</p>
			<p>INTs: {INTs}</p>
			<p>Rush Yards: {run_yards}</p>
			<p>Rush Attempts: {run_attempts}</p>
			<p>Pass TDs: {run_TDs}</p>
		</>
	);
};

export default QBCard;
