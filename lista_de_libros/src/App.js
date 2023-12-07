import AvailableBooks from "./components/available/AvailableBooks";
import ReadingList from "./components/reading/ReadingList";
import { useState } from "react";
import listBooks from "./books.json";
import "./App.css";

function App() {
  const { library } = listBooks;
  const [readingList, SetReadingList] = useState([]);
  const [availableList, SetAvailableList] = useState(library);

  return (
    <div className="container, availableBooksContainer">
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
