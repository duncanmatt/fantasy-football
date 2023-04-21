import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
import styles from '../styles/Player.module.css';

const { Meta } = Card;

const SleeperCard = ({ player }) => {
	return (
		<Link href={`/players/${player._id}`}>
			<Card
				title={player.name}
				hoverable='true'
				// size='small'
				type='inner'
				loading={!player ? true : false}
				extra={
					<Link href={`/players/${player._id}`}>
						<FileSearchOutlined />
					</Link>
				}
				// style={{ height: "400px" }}
			>
				<Meta
					className={styles.meta}
					avatar={
						<Image
							className={styles.sleeperHeadshot}
							src={player.imgUrl}
							alt={player.name}
             fill
							style={{
								borderRadius: '50%',
								// backgroundColor: 'rgba(0,0,0,0.09)',
							}}
						/>
					}
					title={<h2>{player.position}</h2>}
					description={
						<Image
							className={styles.sleeperLogo}
							width={40}
              height={40}
							src={player.team_logo}
							alt={player.team}
						/>
					}
				/>
				<div className={styles.sleeperOutlook}>{player.sleeper[1]}</div>
			</Card>
		</Link>
	);
};

export default SleeperCard;
