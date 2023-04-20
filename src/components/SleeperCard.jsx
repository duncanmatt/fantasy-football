import Link from "next/link";
import Image from "next/image";
import { Card } from "antd";

const { Meta } = Card;

const SleeperCard = ({ player }) => {
  return (
    <Link href={`/players/${player._id}`}>
      <Card
        title={player.name}
        hoverable="true"
        type="inner"
        loading={!player ? true : false}
        extra={player.position}
      >
        <Meta
          description={player.sleeper[1]}
          avatar={
            <Image
              src={player.imgUrl}
              alt={player.name}
              width={100}
              height={100}
              style={{
                borderRadius: "60%",
                backgroundColor: "rgba(0,0,0,0.09)",
              }}
            />
          }
        />
      </Card>
    </Link>
  );
};

export default SleeperCard;
