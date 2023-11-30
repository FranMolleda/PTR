import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [catData, setCatData] = useState("");

  const fetchCatData = async () => {
    try {
      const response = await axios("https://catfact.ninja/fact");

      return response.data.fact;
    } catch (error) {
      console.error("Error fetching cat data:", error);
      throw error;
    }
  };

  const getData = async () => {
    try {
      const data = await fetchCatData();
      setCatData(data);
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };
  useEffect(() => getData, []);

  console.log(catData);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{catData}</p>
    </div>
  );
}

export default App;
