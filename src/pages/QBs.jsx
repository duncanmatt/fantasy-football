import connectDB from '../../lib/connectDB';
import Qb from '../../models/Qb';
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
      title: 'Team',
      dataIndex: 'team',
    },
    {
      title: 'Pts',
      dataIndex: 'fpts',
    },
    {
      title: 'Passing',
      children: [
        {
          title: 'Comps',
          dataIndex: 'completions',
        },
        {
          title: 'Atts',
          dataIndex: 'pass_atts',
        },
        {
          title: 'Yds',
          dataIndex: 'pass_yds',
        },
        { title: 'Avg Comp', dataIndex: 'yds_per_pass' },
        {
          title: 'TDs',
          dataIndex: 'pass_tds',
        },
        {
          title: 'INTs',
          dataIndex: 'interceptions',
        },
        { title: 'Sacks', dataIndex: 'sacks' },
      ],
    },
    {
      title: 'Rushing',
      children: [
        {
          title: 'Yds',
          dataIndex: 'rush_yds',
        },
        {
          title: 'Atts',
          dataIndex: 'rush_atts',
        },
        {
          title: 'TDs',
          dataIndex: 'rush_tds',
        },
      ],
    },
    { title: 'Fums', dataIndex: 'fumbles' },
  ];

  return (
    <Layout>
      <div className={styles.main}>
        <h2 className={styles.title}>QUARTER BACKS</h2>
        <Table
          bordered={true}
          scroll={{ x: true }}
          dataSource={players}
          columns={columns}
          rowKey={(record) => record._id}
          loading={{ spinning: !players ? true : false }}
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  await connectDB();

  const playersResult = await Qb.find({ pass_yds: { $gt: 0 } });
  const players = playersResult.map((doc) => {
    const player = doc.toObject();
    const [name, team] = player.name.split('(');
    player._id = player._id.toString();
    player.name = name.trim();
    player.team = team.slice(0, -1);
    return player;
  });

  return { props: { players: players } };
}

export default QBs;
