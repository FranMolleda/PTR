import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import LogoImage from "./images/LogoImage";

const DetailItem = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/items/${id}`,
        {
          params: { id: id },
        }
      );
      const product = response.data[0];
      setItem(product);
    };
    getProduct();
  }, [id]);

  return (
    <>
      <div>
        <LogoImage />
        <SearchBar />
      </div>
      {item && (
        <>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </>
      )}
      <button>Comprar</button>
    </>
  );
};

export default DetailItem;
