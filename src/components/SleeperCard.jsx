import Link from "next/link";
import Image from "next/image";
import { FileSearchOutlined } from "@ant-design/icons";
import styles from "../styles/Home.module.css";

const SleeperCard = ({ player }) => {
  return (
    <div className={styles.sleeper}>
      <div className={styles.sleeperUpper}>
        <h3>{player.name}</h3>
        <Link href={`/players/${player._id}`}>
          <FileSearchOutlined />
        </Link>
      </div>
      <div className={styles.sleeperBody}>
        <span className={styles.sleeperPos}>{player.position}</span>
        <picture>
          <Image
            className={styles.sleeperHeadshot}
            src={player.imgUrl}
            alt={player.name}
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
              // backgroundColor: 'rgba(0,0,0,0.09)',
            }}
          />
        </picture>
        <Image
          className={styles.sleeperLogo}
          width={40}
          height={40}
          src={player.team_logo}
          alt={player.team}
        />
      </div>
      <div className={styles.sleeperOutlook}><span>{player.sleeper[1]}</span></div>
    </div>
  );
};

export default SleeperCard;
