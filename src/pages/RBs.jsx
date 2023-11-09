import connectDB from '../../lib/connectDB';
import Rb from '../../models/Rb';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Table } from 'antd';
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
      title: 'Team',
      dataIndex: 'team',
    },
    {
      title: 'Pts',
      dataIndex: 'fpts',
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
          title: '20+',
          dataIndex: 'rush_over_20',
        },
        { title: 'Long', dataIndex: 'longest_rush' },
        {
          title: 'TDs',
          dataIndex: 'rush_tds',
        },
      ],
    },
    {
      title: 'Receiving',
      children: [
        {
          title: 'Receptions',
          dataIndex: 'receptions',
        },
        {
          title: 'Targets',
          dataIndex: 'targets',
        },
        {
          title: 'Rec Rate',
          dataIndex: 'catch_rate',
          render: (text) => <>{text}%</>,
        },
        {
          title: 'Tgt Share',
          dataIndex: 'target_share',
          render: (text) => <>{text}%</>,
        },
        {
          title: 'Yds',
          dataIndex: 'rec_yds',
        },
        {
          title: '20+',
          dataIndex: 'rec_over_20',
        },
        {
          title: 'TDs',
          dataIndex: 'rec_tds',
        },
      ],
    },
    {
      title: 'FUMs',
      dataIndex: 'fumbles',
    },
  ];

  return (
    <Layout>
      <div className={styles.main}>
        <h2 className={styles.title}>RUNNING BACKS</h2>
        <Table
          bordered={true}
          scroll={{ x: true }}
          dataSource={players}
          columns={columns}
          loading={{ spinning: !players ? true : false }}
          rowKey={(record) => record._id}
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  await connectDB();

  const playersResult = await Rb.find({ rush_atts: { $gt: 0 } });
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

export default RBs;
