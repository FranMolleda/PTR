import BookCard from "../bookCard/BookCard";
import "./Book.css";

const Book = ({
  bookAvailable,
  readingList,
  SetReadingList,
  availableList,
  SetAvailableList,
}) => {
  const handleButtonClick = (book) => {
    const availableListFiltered = availableList.filter(
      (availableBook) => availableBook.book !== book
    );
    SetAvailableList((prevList) => availableListFiltered);
    if (readingList.length === 0) {
      return SetReadingList([book]);
    } else if (readingList.length > 0 && !readingList.includes(book)) {
      return SetReadingList((prevBooks) => [...prevBooks, book]);
    } else {
      return;
    }
  };

  return (
    <div onClick={() => handleButtonClick(bookAvailable)}>
      <BookCard book={bookAvailable} />
    </div>
  );
};

export default Book;
