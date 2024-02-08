import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./ui/SearchBar";
import LogoImage from "./images/LogoImage";
import ReturnButton from "./ui/ReturnButton";
import CardItem from "./CardItem";
import "./SearchResults.css";

function SearchResults() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const [productsSearched, setProductsSearched] = useState([]);
  const [valueSearch, setValueSearch] = useState(search || "");
  const [categories, setCategories] = useState({});

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

  console.log(productsSearched);


  useEffect(() => {
    const getCategories = () => {
      let categories = {}
      productsSearched.map(product => {
        const category = product.category
        if(categories[category]){
          categories[category] ++
        }else{
          categories[category] =  1
        }
 return categories
      })
      setCategories(categories);
    }
    getCategories()
  }, [productsSearched])
  
console.log(categories);
 /*  useEffect(() => {
    let frecuenciaCategorias = {};
    if (productsSearched) {
      productsSearched.forEach(function (producto) {
        let categoria = producto.category;

        if (frecuenciaCategorias[categoria]) {
          frecuenciaCategorias[categoria]++;
        } else {
          // Si no existe, la inicializamos con 1
          frecuenciaCategorias[categoria] = 1;
        }
      });
      console.log(frecuenciaCategorias);
    }
    console.log(frecuenciaCategorias);
  }, [productsSearched]); */


  const colors = ["#7c7c7c", "#af088b", "#8a4889", "#f888f5c5", "#b2b2b0",  "##ffffff"];


  return (
    <div>
      <div className="searchResults-return-buton">
       <ReturnButton />
      </div>
      <div>
        <LogoImage />
        <SearchBar setInputSearch={setValueSearch} inputSearch={valueSearch} />
      </div>
      <h2>Resultados de la búsqueda para: {search}</h2>
      <div className="searchResults-categories-cotainer searchResults-container">
        {Object.entries(categories).map(([key,value], index)=>(
           <div className="searchResults-category searchResults-product" style={{ backgroundColor: colors[index % colors.length] }} key={key}>
           <h3>{key}</h3>
           <p>{value}</p>
         </div>
        ))}
      </div>
      <div className="searchResults-container">
        {productsSearched.map((item) => (
          <div className="searchResults-product" key={item.id}>
            <Link to={`/items/${item.id}`}>
              <CardItem item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
