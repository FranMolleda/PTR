import { useState } from "react";
import listBooks from "../../books.json";
import Book from "./Book";
import ReadingList from "../reading/ReadingList";

const AvailableBooks = () => {
  const [readingList, SetReadingList] = useState([]);
  const { library } = listBooks;
  return (
    <div>
      <div className="librosDisponibles">
        <h1>Libros disponibles</h1>
        <ul>
          {library.map((bookAvailable) => (
            <li key={bookAvailable.book.title}>
              <Book
                bookAvailable={bookAvailable}
                SetReadingList={SetReadingList}
                readingList={readingList}
              />
            </li>
          ))}
        </ul>
      </div>
      {readingList.length > 0 && (
        <div>
          <h1>Lista de Lectura</h1>
          <ReadingList
            readingList={readingList}
            SetReadingList={SetReadingList}
          />
        </div>
      )}
    </div>
  );
};

export default AvailableBooks;
