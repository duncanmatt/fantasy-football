import connectDB from '../../lib/connectDB';
import Qb from '../../models/Qb';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Table } from 'antd';
import styles from '../styles/Position.module.css';
import Seo from '../components/Seo';

const QBs = ({ players }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <Link href={`/players/qbs/${record._id}`}>{text}</Link>
      ),
    },
    {
      title: 'Team',
      dataIndex: 'team',
    },
    {
      title: 'Pts',
      dataIndex: 'fpts',
      defaultSortOrder: 'descend',
      sorter: { compare: (a, b) => a.fpts - b.fpts },
    },
    {
      title: 'Passing',
      children: [
        {
          title: 'Comps',
          dataIndex: 'completions',
          sorter: { compare: (a, b) => a.completions - b.completions },
        },
        {
          title: 'Atts',
          dataIndex: 'pass_atts',
          sorter: { compare: (a, b) => a.pass_atts - b.pass_atts },
        },
        {
          title: 'Yds',
          dataIndex: 'pass_yds',
          sorter: { compare: (a, b) => a.pass_yds - b.pass_yds },
        },
        {
          title: 'Avg Comp',
          dataIndex: 'yds_per_pass',
          sorter: { compare: (a, b) => a.yds_per_pass - b.yds_per_pass },
        },
        {
          title: 'TDs',
          dataIndex: 'pass_tds',
          sorter: { compare: (a, b) => a.pass_tds - b.pass_tds },
        },
        {
          title: 'INTs',
          dataIndex: 'interceptions',
          sorter: { compare: (a, b) => a.interceptions - b.interceptions },
        },
        {
          title: 'Sacks',
          dataIndex: 'sacks',
          sorter: { compare: (a, b) => a.sacks - b.sacks },
        },
      ],
    },
    {
      title: 'Rushing',
      children: [
        {
          title: 'Yds',
          dataIndex: 'rush_yds',
          sorter: { compare: (a, b) => a.rush_yds - b.rush_yds },
        },
        {
          title: 'Atts',
          dataIndex: 'rush_atts',
          sorter: { compare: (a, b) => a.rush_atts - b.rush_atts },
        },
        {
          title: 'TDs',
          dataIndex: 'rush_tds',
          sorter: { compare: (a, b) => a.rush_tds - b.rush_tds },
        },
      ],
    },
    {
      title: 'Fums',
      dataIndex: 'fumbles',
      sorter: { compare: (a, b) => a.fumbles - b.fumbles },
    },
  ];

  return (
    <>
      <Seo
        title='NFL QB stats 2023'
        desc='Research rushing and passing stats by NFL quarter backs in 2023 for fantasy football.'
      />
      <Layout>
        <div className={styles.main}>
          <div className={styles.posHeading}>
            <h2 className={styles.title}>QUARTER BACKS</h2>
            <span className={styles.scoringFormat}>PPR</span>
          </div>
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
    </>
  );
};

export async function getStaticProps(context) {
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
