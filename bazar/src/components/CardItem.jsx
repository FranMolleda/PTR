import "./CardItem.css";
import StarRating from "./ui/StarRating";

const CardItem = ({ item }) => {
  const { images, title, description, price, rating } = item;
  return (
    <div className="cardItem-container ">
      <div className="cardItem-image">
        <img src={images[0]} alt="item image"></img>
      </div>
      <div className="cardItem-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="cardItem-price-rating">
          <h3>{price}$</h3>
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
