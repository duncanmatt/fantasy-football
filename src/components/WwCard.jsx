import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const WwCard = ({ player }) => {
  return (
    <div className={styles.wW}>
      <div className={styles.wWBody}>
        <div className={styles.wWUpper}>
          <h4 className={styles.wWName}>{player.name}</h4>
          <span className={styles.wWPos}>{player.position}</span>
        </div>
        <div className={styles.bodyInner}>
          <span className={styles.wWLogoWrapper}>
            <Image
              className={styles.wWLogo}
              alt={player.team}
              src={`https://static.www.nfl.com/league/apps/fantasy/logos/200x213/${player.team_abv}.png`}
              fill
              sizes='(max-width: 600px) calc(100vw - 2rem),	(min-width: 600px) minmax(200px, 1fr), (min-width: 1100px) 30vw, (min-width: 1400px) 20vw'
              placeholder='blur'
              blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            />
          </span>
          <div className={styles.wWHeadshotWrapper}>
            <Image
              className={styles.wWHeadshot}
              src={player.imgurl}
              alt={player.name}
              placeholder='blur'
              blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
              fill
              sizes='(max-width: 600px) calc(100vw - 2rem),	(min-width: 600px) minmax(200px, 1fr), (min-width: 1100px) 30vw, (min-width: 1400px) 20vw'
            />
          </div>
        </div>
      </div>
      <div className={styles.wWOutlook}>
        <span className={styles.wWOutlookHeader}>
          <h6>2023 outlook</h6>
        </span>
        <span className={styles.wWOutlookDesc}>{player.desc}</span>
      </div>
      <div className={styles.wWLinkWrapper}>
        <Link className={styles.wWLink} href={`/players/${player._id}`}>
          view more
        </Link>
      </div>
    </div>
  );
};

export default WwCard;
