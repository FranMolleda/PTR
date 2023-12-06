import BookCard from "../bookCard/BookCard";
import "./Book.css";

const Book = ({ bookAvailable, readingList, SetReadingList }) => {
  const { book } = bookAvailable;

  const handleButtonClick = (book) => {
    if (readingList.length === 0) {
      return SetReadingList([book]);
    } else if (readingList.length > 0 && !readingList.includes(book)) {
      return SetReadingList((prevBooks) => [...prevBooks, book]);
    } else {
      return;
    }
  };

  return (
    <div className="book">
      <button onClick={() => handleButtonClick(book)}>
        <BookCard book={book} />
      </button>
    </div>
  );
};

export default Book;
