import { useState } from 'react'
import GamesList from './GamesList'
import SearchBarHeader from './SearchBarHeader'
import gamesArray from '../data/games'
import games from '../data/games'

function App() {
  const [filterBy, setFilterBy] = useState("all")
  const [genreFilter, setGenreFilter] =  useState("")

  // const filteredArray = gamesArray.filter(game => {
  //   if (filterBy === "all") return true
  //   if (filterBy === "played") return game.played
  //   if (filterBy === "unplayed") return !game.played
  // })

  return (
    <div className="App">

      <SearchBarHeader setFilterBy={setFilterBy} setGenreFilter={setGenreFilter} />

      <GamesList gamesArray={gamesArray} filterBy={filterBy} genreFilter={genreFilter} />

    </div>
  );
}

export default App;
