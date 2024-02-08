import "./StarRating.css";

function StarRating({ rating }) {
  const maxStars = 5;
  const starPercentage = (rating / maxStars) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="stars-gray">
      <div
        className="stars-yellow"
        style={{ width: starPercentageRounded }}
      ></div>
    </div>
  );
}

export default StarRating;
