import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const SleeperCard = ({ player }) => {
  return (
    <div className={styles.sleeper}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'absolute',
          right: '1rem',
          top: '0.525rem',
        }}
      >
        <span className={styles.sleeperPos}>{player.position}</span>
        <Image
          className={styles.sleeperLogo}
          width={35}
          height={35}
          src={player.team_logo}
          alt={player.team}
        />
      </div>
      <div className={styles.sleeperUpper}>
        <h4>{player.name}</h4>
      </div>
      <div className={styles.sleeperBody}>
        <div className={styles.sleeperHeadshotWrapper}>
          <Image
            className={styles.sleeperHeadshot}
            src={player.imgUrl}
            alt={player.name}
            placeholder='blur'
            blurDataURL={player.imgUrl}
            fill
            sizes='(max-width: 600px) calc(100vw - 2rem),	(min-width: 600px) minmax(200px, 1fr), (min-width: 1100px) 30vw, (min-width: 1400px) 20vw'
          />
        </div>
      </div>
      <div className={styles.sleeperOutlook}>
        <span>{player.sleeper[1]}</span>
      </div>
      <div className={styles.sleeperLinkWrapper}>
        <Link className={styles.sleeperLink} href={`/players/${player._id}`}>
          view
        </Link>
      </div>
    </div>
  );
};

export default SleeperCard;
