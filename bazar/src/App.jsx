import { useEffect, useState } from "react";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [productsSerched, setProductsSearched] = useState([]);

  const getProduts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      const listProducts = response.data.products;
      setProducts(listProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduts();
  }, []);

  console.log(products);

  const handleInput = (e) => {
    const characters = e.target.value;
    setInputSearch(characters);
  };

  const handleButton = async () => {
    if (inputSearch !== "") {
      try {
        const response = await axios.get("http://localhost:3000/api/items", {
          params: { q: inputSearch },
        });
        setProductsSearched(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  console.log(productsSerched);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Bazar OnLine</h1>
      <div className="card">
        <input onChange={(e) => handleInput(e)}></input>
      </div>
      <button onClick={handleButton}>Buscar</button>
    </>
  );
}

export default App;
