import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LogoImage from "./images/LogoImage";
import ReturnButton from "./ui/ReturnButton";
import SearchBar from "./ui/SearchBar";

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
      <div>
        <ReturnButton />
      </div>
    </>
  );
};

export default DetailItem;
