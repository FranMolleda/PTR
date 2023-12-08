import BookCard from "../bookCard/BookCard";
import "./ReadingList.css";

const ReadingList = ({
  readingList,
  SetReadingList,
  SetAvailableList,
  availableList,
}) => {
  const handleDelete = (book) => {
    const filterList = readingList.filter(
      (bookSelected) => bookSelected !== book
    );
    SetReadingList((prevList) => filterList);
    SetAvailableList((prevAvailableList) => [...availableList, { book: book }]);
  };

  return (
    <div className="readingListContainer">
      <h1>Lista de Lectura</h1>
      <ul>
        {readingList.map((book) => (
          <li key={book.title} className="libroListaLectura">
            <button onClick={() => handleDelete(book)}>x</button>
            <BookCard book={book} className="listaLecturaLibro" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingList;
