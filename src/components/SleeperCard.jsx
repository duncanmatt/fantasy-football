import Link from "next/link";
import Image from "next/image";
import { Card } from "antd";
import styles from "../styles/Player.module.css";

const { Meta } = Card;

const SleeperCard = ({ player }) => {
  return (
    <Link href={`/players/${player._id}`}>
      <Card
        title={player.name}
        hoverable="true"
        size="small"
        type="inner"
        loading={!player ? true : false}
        // extra={player.position}
        // style={{ height: "400px" }}
      >
        <Meta
          className={styles.meta}
          avatar={
            <Image
              src={player.imgUrl}
              alt={player.name}
              height={200}
              width={200}
              style={{
                borderRadius: "60%",
                backgroundColor: "rgba(0,0,0,0.09)",
              }}
            />
          }
          title={player.position} description={player.sleeper[1]}
        />
      </Card>
    </Link>
  );
};

export default SleeperCard;
