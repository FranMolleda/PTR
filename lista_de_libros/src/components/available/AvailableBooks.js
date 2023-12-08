import Book from "./Book";
import "./AvailableBooks.css";
import { useState, useEffect } from "react";

const AvailableBooks = ({
  readingList,
  SetReadingList,
  availableList,
  SetAvailableList,
}) => {
  const [genreList, setGenreList] = useState(availableList);
  const [genreSelected, setGenreSelected] = useState("todos");

  /* almacenamos en un nuevo array todas los generos */
  const genreType = availableList.map((book) => {
    return book.book.genre;
  });

  /* quitamos duplicados */
  const genreFilter = new Set(genreType);

  /* copiamos en un array los generos sin duplicados */
  const optinosGenre = [...genreFilter];

  const handleSelectGenre = (e) => {
    const genreValue = e.target.value;
    setGenreSelected((prevGenreSlected) => genreValue);
  };

  useEffect(() => {
    const filterGenre = () => {
      if (genreList.length === 0) {
        setGenreSelected((prevGenreSelecte) => "todos");
      }
      setGenreList((prevList) => availableList);

      if (genreSelected !== "todos") {
        const genrefiltered = availableList.filter(
          (bookAvailable) => bookAvailable.book.genre === genreSelected
        );
        return setGenreList((prevList) => genrefiltered);
      }
    };
    filterGenre();
  }, [genreSelected, availableList, genreList.length]);

  return (
    <div>
      <div>
        <h1>{availableList.length} Libros disponibles</h1>
        {readingList.length > 0 && (
          <h4>{readingList.length} en la lista de lectura</h4>
        )}
        <div>
          <label>Genero</label>
          <select
            name="genre"
            id="genre"
            onChange={(e) => handleSelectGenre(e)}
          >
            <option value="todos">Todos</option>
            {optinosGenre.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <ul className="librosDisponibles">
          {genreList.map((bookAvailable) => (
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
