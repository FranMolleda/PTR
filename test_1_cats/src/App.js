import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [catData, setCatData] = useState("");
  const [threeWords, setThreeWords] = useState([]);
  const [catGift, setCatGift] = useState([]);
  const [loading, setLoading] = useState(true);
  const giphyKey = process.env.REACT_APP_GIPHY_KEY;

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
      const convertArray = [data];
      const filterThreeWorsds = convertArray[0].split(" ").slice(0, 3);
      setThreeWords(filterThreeWorsds);
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };

  useEffect(() => getData, []);

  const fetchGift = async (threeWords) => {
    try {
      setLoading(true);
      const response = await axios(
        `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}=${threeWords}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips}`
      );
      const giftSelected = response.data.data[0];
      setCatGift(giftSelected);
    } catch (error) {
      console.log("Error fetching giphy data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (threeWords.length > 0) {
      const SearchQuery = threeWords.join(" ");
      fetchGift(SearchQuery);
    }
  }, [threeWords]);

  return (
    <div className="App">
      <section className="container">
        {loading ? (
          <div className="imageContainer">
            <p>Loading...</p>
          </div>
        ) : (
          catGift && (
            <div className="imageContainer">
              <img
                src={catGift.images?.downsized_large?.url}
                alt="giphyImage"
              />
            </div>
          )
        )}
        <div className="textContainer">
          <p>{catData}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
