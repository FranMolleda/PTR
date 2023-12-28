import { useState } from "react";
import "./App.css";
import LogoImage from "./components/images/LogoImage";
import SearchBar from "./components/ui/SearchBar";
import { Link } from "react-router-dom";

function App() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <>
      <LogoImage />
      <h1>Bazar OnLine</h1>
      <div className="card">
        <SearchBar inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <Link to={`/items?search=${inputSearch}`}>
          <button>Buscar</button>
        </Link>
      </div>
    </>
  );
}

export default App;
