import connectDB from "../../lib/connectDB";
import Player from "../../models/Player";

const QBs = ({players}) => {
  return (
    <div>
      <h2>Quarter Backs</h2>
      <div>
        {players?.map((player) => (
          <div
          key={player._id}>
          <p>{player.name}</p>
          <p>{player.position}</p>
          <p>{player.team}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
	await connectDB();

	const playersResult = await Player.find({ position: 'QB' }).limit(10);
	const players = playersResult.map(doc => {
		const player = doc.toObject();
		player._id = player._id.toString();
		return player;
	});

	return { props: { players: players } };
}

export default QBs
