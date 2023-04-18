import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "antd";
import styles from "../styles/Player.module.css";

const { Meta } = Card;

const SleeperCard = ({ player }) => {
  return (
    <Card
      title={player.name}
      loading={!player ? true : false}
      extra={<Link href={`/players/${player._id}`}>view</Link>}
    >
      <Meta
        description={player.sleeper[1]}
        avatar={
          <Image
            src={player.imgUrl}
            alt={player.name}
            width={100}
            height={100}
          />
        }
      />
    </Card>
  );
};

export default SleeperCard;
