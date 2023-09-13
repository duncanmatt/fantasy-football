import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const SleeperCard = ({ player }) => {
  return (
    <div className={styles.sleeper}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: '0',
          top: '1.45rem',
        }}
      ></div>
      <div className={styles.sleeperBody}>
        <div className={styles.sleeperUpper}>
          <h4 className={styles.sleeperName}>{player.name}</h4>
          <span className={styles.sleeperPos}>{player.position}</span>
        </div>
        <span className={styles.sleeperLogoWrapper}>
          <Image
            className={styles.sleeperLogo}
            alt={player.team}
            src={`https://static.www.nfl.com/league/apps/fantasy/logos/200x213/${player.team_abv}.png`}
            fill
            sizes='(max-width: 600px) calc(100vw - 2rem),	(min-width: 600px) minmax(200px, 1fr), (min-width: 1100px) 30vw, (min-width: 1400px) 20vw'
            placeholder='blur'
            blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
          />
        </span>
        <div className={styles.sleeperHeadshotWrapper}>
          <Image
            className={styles.sleeperHeadshot}
            src={player.imgUrl}
            alt={player.name}
            placeholder='blur'
            blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            fill
            sizes='(max-width: 600px) calc(100vw - 2rem),	(min-width: 600px) minmax(200px, 1fr), (min-width: 1100px) 30vw, (min-width: 1400px) 20vw'
          />
        </div>
      </div>
      <div className={styles.sleeperDetails}>
        <div className={styles.sleeperDetailsInner}>
          <span className={styles.sleeperDetailsTeam}>{player.team}</span>
          <span className={styles.sleeperDetailsNumber}>#{player.num}</span>
        </div>
      </div>
      <div className={styles.sleeperOutlook}>
        <span className={styles.sleeperOutlookHeader}>
          <h6>2023 outlook</h6>
        </span>
        <span className={styles.sleeperOutlookDesc}>{player.sleeper[1]}</span>
      </div>
      <div className={styles.sleeperLinkWrapper}>
        <Link className={styles.sleeperLink} href={`/players/${player._id}`}>
          view more
        </Link>
      </div>
    </div>
  );
};

export default SleeperCard;
