import Book from "./Book";
import "./AvailableBooks.css";

const AvailableBooks = ({
  readingList,
  SetReadingList,
  availableList,
  SetAvailableList,
}) => {
  return (
    <div>
      <div>
        <h1>{availableList.length} Libros disponibles</h1>
        {readingList.length > 0 && (
          <h4>{readingList.length} en la lista de lectura</h4>
        )}
        <ul className="librosDisponibles">
          {availableList.map((bookAvailable) => (
            <li className="libro" key={bookAvailable.book.title}>
              <Book
                bookAvailable={bookAvailable.book}
                SetReadingList={SetReadingList}
                readingList={readingList}
                availableList={availableList}
                SetAvailableList={SetAvailableList}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvailableBooks;
