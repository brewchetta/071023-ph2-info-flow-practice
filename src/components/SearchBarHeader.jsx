function SearchBarHeader() {
  return (
    <div className="search-bar-header">

      <button>Show All Games</button>
      <button>Show Played Games</button>
      <button>Show Unplayed Games</button>

      <input type="search" placeholder="search by genre" />

    </div>
  )
}

export default SearchBarHeader
