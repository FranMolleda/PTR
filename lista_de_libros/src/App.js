import AvailableBooks from "./components/available/AvailableBooks";
import ReadingList from "./components/reading/ReadingList";
import { useState, useEffect } from "react";
import listBooks from "./books.json";
import "./App.css";

function App() {
  const { library } = listBooks;
  const [readingList, setReadingList] = useState([]);
  const [availableList, setAvailableList] = useState(library);

  useEffect(() => {
    const getAvailableList = JSON.parse(localStorage.getItem("availableList"));
    const getReadingList = JSON.parse(localStorage.getItem("readingList"));

    setAvailableList(getAvailableList || library);
    setReadingList(getReadingList || []);
  }, []);

  /* Para guardar y mostrar los cambios en 2 pentañas con la misma url, utilizando las varaible almacenadas en localStorage */
  useEffect(() => {
    const handleAvailableListChange = (event) => {
      if (event.key === "availableList") {
        const updatedAvailableList = JSON.parse(event.newValue);
        setAvailableList(updatedAvailableList);
      }
    };

    const handleReadingListChange = (event) => {
      if (event.key === "readingList") {
        const updatedReadingList = JSON.parse(event.newValue);
        setReadingList(updatedReadingList || []); // Inicializar si es nulo
      }
    };

    // Agregar el escuchador de eventos para "availableList"
    window.addEventListener("storage", handleAvailableListChange);

    // Agregar el escuchador de eventos para "readingList"
    window.addEventListener("storage", handleReadingListChange);

    // Limpiar los escuchadores cuando el componente se desmonta
    return () => {
      window.removeEventListener("storage", handleAvailableListChange);
      window.removeEventListener("storage", handleReadingListChange);
    };
  }, [setAvailableList, setReadingList]);

  useEffect(() => {
    localStorage.setItem("availableList", JSON.stringify(availableList));
  }, [availableList]);

  return (
    <div className="container">
      <AvailableBooks
        setReadingList={setReadingList}
        readingList={readingList}
        availableList={availableList}
        setAvailableList={setAvailableList}
      />
      {readingList?.length > 0 && (
        <ReadingList
          readingList={readingList}
          setReadingList={setReadingList}
          availableList={availableList}
          setAvailableList={setAvailableList}
        />
      )}
    </div>
  );
}

export default App;
