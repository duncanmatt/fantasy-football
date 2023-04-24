import connectDB from "../../lib/connectDB";
import Player from "../../models/Player";
import Layout from "../components/Layout";
import Link from "next/link";
import { Table } from "antd";
import styles from "../styles/Position.module.css";

const TEs = ({ players }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <Link href={`/players/${record._id}`}>{text}</Link>
      ),
    },
    {
      title: "Position",
      dataIndex: "position",
    },
    {
      title: "Receiving",
      children: [
        {
          title: "Yards",
          dataIndex: "rec_yards",
        },
        {
          title: "Targets",
          dataIndex: "targets",
        },
        {
          title: "Receptions",
          dataIndex: "receptions",
        },
        {
          title: "TDs",
          dataIndex: "rec_TDs",
        },
      ],
    },
    {
      title: "Rushing",
      children: [
        {
          title: "Yards",
          dataIndex: "run_yards",
        },
        {
          title: "TDs",
          dataIndex: "run_TDs",
        },
      ],
    },
    {
      title: "FUMs",
      dataIndex: "FUMs",
    },
  ];

  return (
    <Layout>
      <div className={styles.main}>
        <h2 className={styles.title}>TIGHT ENDS</h2>
          <Table
            bordered={true}
            dataSource={players}
            columns={columns}
            rowKey={(record) => record._id}
          />
        </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  await connectDB();

  const playersResult = await Player.find({ position: "TE" });
  const players = playersResult.map((doc) => {
    const player = doc.toObject();
    player._id = player._id.toString();
    return player;
  });

  return { props: { players: players } };
}

export default TEs;
