import Link from 'next/link';
import Image from 'next/image';
import { FileSearchOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css';

const SleeperCard = ({ player }) => {
	return (
		<div className={styles.sleeper}>
			<div className={styles.sleeperUpper}>
				<h4>{player.name}</h4>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<span className={styles.sleeperPos}>{player.position}</span>
					<Image
						className={styles.sleeperLogo}
						width={40}
						height={40}
						src={player.team_logo}
						alt={player.team}
					/>
				</div>
			</div>
			<div className={styles.sleeperBody}>
				<div className={styles.sleeperHeadshotWrapper}>
					<picture>
						<Image
							className={styles.sleeperHeadshot}
							src={player.imgUrl}
							alt={player.name}
              quality={50}
							fill
							style={
								{
									// borderRadius: "50%",
								}
							}
						/>
					</picture>
				</div>
			</div>
			<div className={styles.sleeperOutlook}>
				<span>{player.sleeper[1]}</span>
			</div>
			<div className={styles.sleeperLinkWrapper}>
				<Link
					className={styles.sleeperLink}
					href={`/players/${player._id}`}>
					View
				</Link>
			</div>
		</div>
	);
};

export default SleeperCard;
