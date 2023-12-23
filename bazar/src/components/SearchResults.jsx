// SearchResults.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./ui/SearchBar";
import LogoImage from "./images/LogoImage";
import ReturnButton from "./ui/ReturnButton";

function SearchResults() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const [productsSearched, setProductsSearched] = useState([]);

  useEffect(() => {
    const filterItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/items", {
          params: { q: search },
        });
        const dataFilter = await response.data;
        setProductsSearched(dataFilter);
      } catch (error) {
        console.error(error);
      }
    };
    filterItems();
  }, [search]);

  return (
    <div>
      <div>
        <LogoImage />
        <SearchBar value={search} />
      </div>
      <h2>Resultados de la búsqueda para: {search}</h2>
      <div>
        {productsSearched.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
      </div>
      <ReturnButton />
    </div>
  );
}

export default SearchResults;
