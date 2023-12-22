import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");

  const handleInput = (e) => {
    const characters = e.target.value;
    setInputSearch(characters);
  };
  return (
    <>
      <input onChange={(e) => handleInput(e)}></input>
      <Link to={`/items?search=${inputSearch}`}>
        <button>Buscar</button>
      </Link>
    </>
  );
};

export default SearchBar;
