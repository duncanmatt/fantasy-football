import Link from "next/link";
import Image from "next/image";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

const SleeperCard = ({ player }) => {
  return (
    <Card
      title={player.name}
      hoverable
      loading={!player ? true : false}
      extra={<Link href={`/players/${player._id}`}><PlusOutlined /></Link>}
    >
      <Meta
        description={player.sleeper[1]}
        avatar={
          <Image
            src={player.imgUrl}
            alt={player.name}
            width={100}
            height={100}
            style={{borderRadius: '60%', backgroundColor: 'rgba(0,0,0,0.09)'}}
          />
        }
      />
    </Card>
  );
};

export default SleeperCard;
