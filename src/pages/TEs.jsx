import connectDB from '../../lib/connectDB';
import Te from '../../models/Te';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Table } from 'antd';
import styles from '../styles/Position.module.css';
import Seo from '../components/Seo';

const TEs = ({ players }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <Link href={`/players/tes/${record._id}`}>{text}</Link>
      ),
    },
    {
      title: 'Team',
      dataIndex: 'team',
    },
    {
      title: 'Pts',
      dataIndex: 'fpts',
      sorter: { compare: (a, b) => a.fpts - b.fpts },
      defaultSortOrder: 'descend',
    },
    {
      title: 'Receiving',
      children: [
        {
          title: 'Receptions',
          dataIndex: 'receptions',
          sorter: { compare: (a, b) => a.receptions - b.receptions },
        },
        {
          title: 'Targets',
          dataIndex: 'targets',
          sorter: { compare: (a, b) => a.targets - b.targets },
        },
        {
          title: 'Rec Rate',
          dataIndex: 'catch_rate',
          render: (text) => <>{text}%</>,
          sorter: { compare: (a, b) => a.catch_rate - b.catch_rate },
        },
        {
          title: 'Tgt Share',
          dataIndex: 'target_share',
          render: (text) => <>{text}%</>,
          sorter: { compare: (a, b) => a.target_share - b.target_share },
        },
        {
          title: 'Yds',
          dataIndex: 'rec_yds',
          sorter: { compare: (a, b) => a.rec_yds - b.rec_yds },
        },
        {
          title: '20+',
          dataIndex: 'rec_over_20',
          sorter: { compare: (a, b) => a.rec_over_20 - b.rec_over_20 },
        },
        {
          title: 'TDs',
          dataIndex: 'rec_tds',
          sorter: { compare: (a, b) => a.rec_tds - b.rec_tds },
        },
      ],
    },
    {
      title: 'Rushing',
      children: [
        {
          title: 'Atts',
          dataIndex: 'rush_atts',
          sorter: { compare: (a, b) => a.rush_atts - b.rush_atts },
        },
        {
          title: 'Yds',
          dataIndex: 'rush_yds',
          sorter: { compare: (a, b) => a.rush_yds - b.rush_yds },
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
        title='NFL TE stats 2023'
        desc='Research receiving and rushing stats by NFL tight ends in 2023 for fantasy football.'
      />
      <Layout>
        <div className={styles.main}>
          <div className={styles.posHeading}>
            <h2 className={styles.title}>TIGHT ENDS</h2>
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

  const playersResult = await Te.find({ targets: { $gt: 0 } });
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

export default TEs;
