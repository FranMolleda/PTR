import AvailableBooks from "./components/available/AvailableBooks";
import ReadingList from "./components/reading/ReadingList";
import { useState, useEffect } from "react";
import listBooks from "./books.json";
import "./App.css";

function App() {
  const { library } = listBooks;
  const [readingList, SetReadingList] = useState([]);
  const [availableList, SetAvailableList] = useState(library);

  useEffect(() => {
    const getAvailableList = JSON.parse(localStorage.getItem("availableList"));
    const getReadingList = JSON.parse(localStorage.getItem("readingList"));

    if (getAvailableList || getReadingList) {
      SetAvailableList((prevAvailableList) => getAvailableList || library);
      SetReadingList((prevReadingList) => getReadingList || []);
    }
    return;
  }, []);

  return (
    <div className="container">
      <AvailableBooks
        SetReadingList={SetReadingList}
        readingList={readingList}
        availableList={availableList}
        SetAvailableList={SetAvailableList}
      />
      {readingList.length > 0 && (
        <ReadingList
          readingList={readingList}
          SetReadingList={SetReadingList}
          availableList={availableList}
          SetAvailableList={SetAvailableList}
        />
      )}
    </div>
  );
}

export default App;
