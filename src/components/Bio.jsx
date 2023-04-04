import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import styles from '../styles/Player.module.css';

const Bio = ({ imgUrl, name, position }) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 600px)',
	});

	return isMobile ? (
		<div
			className={styles.bio}
			style={{ backgroundImage: `url(${imgUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
				<h3>{name}</h3>
				<p>{position}</p>
		</div>
	) : (
		<div className={styles.bio}>
			<Image
				alt={name}
				src={imgUrl}
				fill
			/>
			<div className={styles.info}>
				<h3>{name}</h3>
				<p>{position}</p>
			</div>
		</div>
	);
};

export default Bio;
