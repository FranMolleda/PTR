import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchBar = ({ setInputSearch, inputSearch }) => {
  const handleInput = (e) => {
    const characters = e.target.value;
    setInputSearch(characters);
  };

  return (
    <div className="containerSearchBar">
      <div className="inputContainer">
        <input
          className="inputSearchBar"
          onChange={(e) => handleInput(e)}
          placeholder="laptops, smartphones, ..."
          value={inputSearch}
        />
        <Link to={`/items?search=${inputSearch}`}>
          <div className="searchIcon">🔍</div>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
