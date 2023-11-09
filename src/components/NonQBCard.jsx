import Image from 'next/image';
import styles from '../styles/Player.module.css';

const NonQBCard = ({
  name,
  position,
  imgurl,
  rec_yds,
  rush_yds,
  rush_atts,
  rush_tds,
  receptions,
  rec_tds,
  fumbles,
}) => {
  return (
    <div className={styles.player}>
      <div className={styles.upper}>
        <div className={styles.hsContainer}>
          <Image
            src={imgurl}
            quality={50}
            placeholder='blur'
            blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            className={styles.headshot}
            fill
            sizes='(max-width: 800px) 300px,
										(min-width: 800px) 400px'
            alt={name}
          />
        </div>
        <div className={styles.info}>
          <b>{name}</b>
          &nbsp;|&nbsp;{position}
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>Rec Yards:</span> {rec_yds}
          </div>
          <div className={styles.stat}>
            <span>Receptions:</span> {receptions}
          </div>
          <div className={styles.stat}>
            <span>Rec TDs:</span> {rec_tds}
          </div>
          <div className={styles.stat}>
            <span>Rush Yards:</span> {rush_yds}
          </div>
          {position === 'RB' && (
            <div className={styles.stat}>
              <span>Rush Attempts:</span> {rush_atts}
            </div>
          )}
          <div className={styles.stat}>
            <span>Rush TDs:</span> {rush_tds}
          </div>
          <div className={styles.stat}>
            <span>FUMs:</span> {fumbles}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonQBCard;
