import React from 'react'

const Sleepers = ({players}) => {
  return (
    <div>
      {players.map((player) => (
        <div key={player._id}>
          <h3>{player.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Sleepers
