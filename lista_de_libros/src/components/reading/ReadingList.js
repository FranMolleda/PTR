import { useEffect } from "react";
import BookCard from "../bookCard/BookCard";
import "./ReadingList.css";

const ReadingList = ({
  readingList,
  setReadingList,
  setAvailableList,
  availableList,
}) => {
  const handleDelete = (book) => {
    const filterList = readingList.filter(
      (bookSelected) => bookSelected !== book
    );
    setReadingList(filterList);
    setAvailableList((prevAvailableList) => [...availableList, { book }]);

    localStorage.setItem(
      "availableList",
      JSON.stringify([...availableList, { book }])
    );
    if (filterList?.length === 0) {
      localStorage.removeItem("readingList");
    } else {
      localStorage.setItem("readingList", JSON.stringify(filterList));
    }
  };

  useEffect(() => {
    // Actualizar el almacenamiento local con la lista de lectura actualizada
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);

  return (
    <div className="readingListContainer">
      <h1>Lista de Lectura</h1>
      <ul>
        {readingList?.map((book) => (
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
