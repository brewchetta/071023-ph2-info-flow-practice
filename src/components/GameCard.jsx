function GameCard({ game }) {
  return (
    <div className="game-card" style={{backgroundImage: `url(${game.img_url})`}}>
      <h2>{game.name}</h2>
      <h3>{game.genre}</h3>
    </div>
  )
}

export default GameCard
