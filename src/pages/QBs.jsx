import connectDB from '../../lib/connectDB';
import Player from '../../models/Player';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Table } from 'antd';
import styles from '../styles/Position.module.css';

const QBs = ({ players }) => {
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
			title: 'Passing',
			children: [
				{
					title: 'Yards',
					dataIndex: 'pass_yards',
				},
				{
					title: 'Attempts',
					dataIndex: 'pass_attempts',
				},
				{
					title: 'Completions',
					dataIndex: 'completions',
				},
				{
					title: 'TDs',
					dataIndex: 'TDs',
				},
				{
					title: 'INTs',
					dataIndex: 'INTs',
				},
			],
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
					dataIndex: 'run_yards',
				},
				{
					title: 'TDs',
					dataIndex: 'run_TDs',
				},
			],
		},
	];

	return (
		<Layout>
			<div className={styles.main}>
				<h2 className={styles.title}>QUARTER BACKS</h2>
				<Table
				bordered={true}
					dataSource={players}
					columns={columns}
					rowKey={record => record._id}
				/>
			</div>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	await connectDB();

	const playersResult = await Player.find({ position: 'QB' });
	const players = playersResult.map(doc => {
		const player = doc.toObject();
		player._id = player._id.toString();
		return player;
	});

	return { props: { players: players } };
}

export default QBs;
