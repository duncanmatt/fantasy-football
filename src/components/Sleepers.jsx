import SleeperCard from "./SleeperCard";
import styles from '../styles/Player.module.css'

const Sleepers = ({players}) => {
  return (
    <div className={styles.sleepers}>
      {players.map((player) => (
       <SleeperCard key={player._id} player={player} />
      ))}
    </div>
  )
}

export default Sleepers
