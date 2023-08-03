function SearchBarHeader({ setFilterBy, setGenreFilter }) {

  return (
    <div className="search-bar-header">

      <button onClick={e => setFilterBy(e.target.name)} name="all">Show All Games</button>
      <button onClick={e => setFilterBy(e.target.name)} name="played">Show Played Games</button>
      <button onClick={e => setFilterBy(e.target.name)} name="unplayed">Show Unplayed Games</button>

      <input onChange={e => setGenreFilter(e.target.value)} type="search" placeholder="search by genre" />

    </div>
  )
}

export default SearchBarHeader
