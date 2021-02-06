const Search = ({ search, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Chercher"
      />
    </div>
  );
};

export default Search;
