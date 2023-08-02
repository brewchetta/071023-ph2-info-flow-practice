import GamesList from './GamesList'
import SearchBarHeader from './SearchBarHeader'
import gamesArray from '../data/games'

function App() {
  return (
    <div className="App">

      <SearchBarHeader />

      <GamesList gamesArray={gamesArray} />

    </div>
  );
}

export default App;
