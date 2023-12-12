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
    const getReadingList = JSON.parse(localStorage.getItem("readingList"));
    const availableListFiltered = availableList.filter(
      (availableBook) => availableBook.book !== book
    );
    localStorage.setItem(
      "availableList",
      JSON.stringify(availableListFiltered)
    );
    SetAvailableList((prevList) => availableListFiltered);
    if (readingList.length === 0) {
      localStorage.setItem("readingList", JSON.stringify([book]));
      SetReadingList([book]);
    } else if (readingList.length > 0 && !readingList.includes(book)) {
      SetReadingList((prevBooks) => [...prevBooks, book]);
      localStorage.setItem(
        "readingList",
        JSON.stringify([...getReadingList, book])
      );
    }
  };

  return (
    <div onClick={() => handleButtonClick(bookAvailable)}>
      <BookCard book={bookAvailable} />
    </div>
  );
};

export default Book;
