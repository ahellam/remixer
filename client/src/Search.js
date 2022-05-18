import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState()

  function handleSearch(e) {
    e.preventDefault();
    // console.log("searching for:", search)
    fetch(`http://localhost:3000/spotify_api/search?track_name=${search}`)
    .then(res => res.json())
    .then(console.log)
  }

  return (
    <div className=" bg-neutral-800 p-2 rounded-sm grid grid-rows-6">
      <form onSubmit={handleSearch}>
        <input
          className="p-1 rounded-sm"
          type="text"
          placeholder="Search Songs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          className="     
      bg-neutral-600
      text-green-300 
      px-3
      py-1
      rounded-sm
      mx-1
      hover:bg-green-700
      active:bg-green-900
      "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
