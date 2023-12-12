import { useState, useEffect } from "react";
import BookCard from "../bookCard/BookCard";
import "./AvailableBooks.css";
import GenreSelect from "./GenreSelect";

const AvailableBooks = ({
  readingList,
  setReadingList,
  availableList,
  setAvailableList,
}) => {
  const [genreList, setGenreList] = useState(availableList);
  const [genreSelected, setGenreSelected] = useState("todos");

  const handleButtonClick = async (book) => {
    if (
      !readingList.some((selectedBook) => selectedBook.title === book.title)
    ) {
      const availableListFiltered = availableList.filter(
        (availableBook) => availableBook.book !== book
      );

      setAvailableList(availableListFiltered);

      localStorage.setItem(
        "availableList",
        JSON.stringify(availableListFiltered)
      );

      if (readingList?.length === 0) {
        setReadingList([book]);
        localStorage.setItem("readingList", JSON.stringify([book]));
      } else if (readingList?.length > 0 && !readingList.includes(book)) {
        setReadingList((prevBooks) => [...prevBooks, book]);
        localStorage.setItem(
          "readingList",
          JSON.stringify([...readingList, book])
        );
      }
    }
  };

  useEffect(() => {
    const filterGenre = () => {
      if (genreList?.length === 0) {
        setGenreSelected("todos");
      }
      setGenreList(availableList);

      if (genreSelected !== "todos") {
        const genrefiltered = availableList.filter(
          (bookAvailable) => bookAvailable.book.genre === genreSelected
        );
        setGenreList(genrefiltered);
      }
    };
    filterGenre();
  }, [genreSelected, availableList, genreList?.length]);

  return (
    <div>
      <div>
        <h1>{availableList?.length} Libros disponibles</h1>
        {readingList?.length > 0 && (
          <h4>{readingList.length} en la lista de lectura</h4>
        )}
        <GenreSelect
          availableList={availableList}
          setGenreSelected={setGenreSelected}
        />
        <ul className="librosDisponibles">
          {genreList?.map((bookAvailable) => (
            <li className="libro" key={bookAvailable.book.title}>
              <div onClick={() => handleButtonClick(bookAvailable.book)}>
                <BookCard book={bookAvailable.book} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvailableBooks;
