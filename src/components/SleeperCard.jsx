import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'antd';
import styles from '../styles/Player.module.css';

const { Meta } = Card;

const tabList = [
	{
		key: '2022 Stats',
		tab: '2022 Stats',
	},
	{
		key: '2023 Outlook',
		tab: '2023 Outlook',
	},
];

const SleeperCard = ({ player }) => {
	return (
		<Card
    size='small'
      cover={
        <Image
          src={player.imgUrl}
          alt={player.name}
          fill
        />
      }
      tabList={tabList}
			loading={!player ? true : false}
			extra={<Link href={`/players/${player._id}`}>view</Link>}>
			<Meta
				title={player.name}
				description={player.sleeper[1]}
			/>
		</Card>
	);
};

export default SleeperCard;
