import GameCard from './GameCard'

function GamesList({ gamesArray, genreFilter }) {

  const filteredByGenre = gamesArray.filter(game => {
    return game.genre.toLowerCase().includes(genreFilter.toLowerCase())
  })

  return (
    <div className="games-list">
      {filteredByGenre.map(game => <GameCard key={game.id} game={game} />)}
    </div>
  )
}

export default GamesList
