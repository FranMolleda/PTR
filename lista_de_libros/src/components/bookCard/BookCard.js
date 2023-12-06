const BookCard = ({ book }) => {
  return (
    <>
      <h2>{book.title}</h2>
      <img src={book.cover} alt="book available" className="cover" />
    </>
  );
};

export default BookCard;
