import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LogoImage from "./images/LogoImage";
import ReturnButton from "./ui/ReturnButton";
import SearchBar from "./ui/SearchBar";
import "./DetailItem.css"
import StarRating from "./ui/StarRating";

const DetailItem = () => {
  const [item, setItem] = useState(null);
  const [restImagesItem, setRestImagesItem] = useState([])
  const [FirstImageItem, setFirstImageItem] = useState([])
  const { id } = useParams();
  const { brand, category, description, price, rating, images, stock, thumbnail, title } = item || {};
  
  
  console.log(item);
  
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
    
    useEffect(() => {
      const getImages = ()=>{
      if(images){
        setFirstImageItem(images[0].toString())
        setRestImagesItem(images.splice(1,images.length))
      }
    }
    getImages()
    
  }, [images])

  console.log(FirstImageItem);
  console.log(restImagesItem);

  return (
    <>
      <div className="detailItem-return-button">
        <ReturnButton />
      </div>
      <div className="detailItem-logo-search">
        <LogoImage />
        <SearchBar />
      </div>
      <div className="detailItem-images-container">
        <div className="detailItem-firstImageItem">
        <img src={FirstImageItem} alt="item-image" />
        </div>
        <div className="detailItem-restImagesItem">
        {restImagesItem.map(image => (
          <img src={image} alt="miniatures-images" key={image} className="detailItem-imageItem"/>
        ))}
        </div>
      </div>
      {item && (
        <div className="detailItem-info-container">
          <h1>{title}</h1>
          <div className="detailItem-info-group">
             <div className="detailItem-price-stock">
             <h3>{price}$</h3>
             <p>{stock} Disponibles</p>
             </div>
             <StarRating rating={rating} />
          </div>
          <p>{description}</p>
        </div>
      )}

      <button className="detailItem-buy-button">Comprar</button>
    </>
  );
};

export default DetailItem;
