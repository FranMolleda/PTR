import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setInputSearch, value }) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInput = (e) => {
    const characters = e.target.value;
    setInputValue(characters);
    setInputSearch(characters);
  };

  return (
    <div className="containerSearchBar">
      <div className="inputContainer">
        <input
          className="inputSearchBar"
          onChange={(e) => handleInput(e)}
          placeholder="laptops, smartphones, ..."
          value={inputValue}
        />
        <div className="searchIcon">🔍</div>
      </div>
    </div>
  );
};

export default SearchBar;
