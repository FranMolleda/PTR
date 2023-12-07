import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <>
      <img src={book.cover} alt="book available" className="cover" />
    </>
  );
};

export default BookCard;
