const Search = ({ search, handleSearch }) => {
  return (
    <div>
      <input type='text' value={search} onChange={handleSearch} />
    </div>
  )
}

export default Search