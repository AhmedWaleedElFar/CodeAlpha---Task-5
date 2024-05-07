function SearchBar({ onSearch }) {
    return (
      <input className="search-bar" type="text" onChange={(e) => onSearch(e.target.value)} />
    );
  }
  
  export default SearchBar;