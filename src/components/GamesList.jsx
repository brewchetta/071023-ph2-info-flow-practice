import GameCard from './GameCard'

function GamesList({ gamesArray }) {
  return (
    <div className="games-list">
      {/* show all the games here */}
      { gamesArray.map(g => <GameCard key={g.id} game={g} />) }
    </div>
  )
}

export default GamesList
