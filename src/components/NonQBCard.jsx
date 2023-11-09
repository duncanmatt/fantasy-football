import Image from 'next/image';
import styles from '../styles/Player.module.css';

const NonQBCard = ({
  name,
  position,
  imgurl,
  rec_yds,
  run_yds,
  run_attempts,
  run_TDs,
  receptions,
  rec_TDs,
  FUMs,
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
            <span>Rec TDs:</span> {rec_TDs}
          </div>
          <div className={styles.stat}>
            <span>Rush Yards:</span> {run_yds}
          </div>
          {position === 'RB' && (
            <div className={styles.stat}>
              <span>Rush Attempts:</span> {run_attempts}
            </div>
          )}
          <div className={styles.stat}>
            <span>Rush TDs:</span> {run_TDs}
          </div>
          <div className={styles.stat}>
            <span>FUMs:</span> {FUMs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonQBCard;
