import connectDB from '../../lib/connectDB';
import Player from '../../models/Player';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Table, Spin } from 'antd';
import styles from '../styles/Position.module.css';

const RBs = ({ players }) => {
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			render: (text, record) => (
				<Link href={`/players/${record._id}`}>{text}</Link>
			),
		},
		{
			title: 'Position',
			dataIndex: 'position',
		},
		{
			title: 'Rushing',
			children: [
				{
					title: 'Yards',
					dataIndex: 'run_yards',
				},
				{
					title: 'Attempts',
					dataIndex: 'run_attempts',
				},
				{
					title: 'TDs',
					dataIndex: 'run_TDs',
				},
			],
		},
		{
			title: 'Receiving',
			children: [
				{
					title: 'Yards',
					dataIndex: 'rec_yards',
				},
				{
					title: 'Receptions',
					dataIndex: 'receptions',
				},
				{
					title: 'TDs',
					dataIndex: 'rec_TDs',
				},
			],
		},
		{
			title: 'FUMs',
			dataIndex: 'FUMs',
		},
	];

	return (
		<Layout>
			<div className={styles.main}>
				<h2 className={styles.title}>RUNNING BACKS</h2>
				<Table
					bordered={true}
					dataSource={players}
					columns={columns}
					loading={{ spinning: !players ? true : false}}
					rowKey={record => record._id}
				/>
			</div>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	await connectDB();

	const playersResult = await Player.find({ position: 'RB' });
	const players = playersResult.map(doc => {
		const player = doc.toObject();
		player._id = player._id.toString();
		return player;
	});

	return { props: { players: players } };
}

export default RBs;
