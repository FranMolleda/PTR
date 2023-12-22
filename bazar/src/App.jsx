import { useEffect, useState } from "react";
import "./App.css";
import { getProduts } from "./products";
import SearchBar from "./components/SearchBar";
import LogoImage from "./components/images/LogoImage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const prodcuts = await getProduts();
      setProducts(prodcuts);
    };
    fetchData();
  }, []);

  return (
    <>
      <LogoImage />
      <h1>Bazar OnLine</h1>
      <div className="card">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
