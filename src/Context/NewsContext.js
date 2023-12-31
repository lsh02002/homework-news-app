import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2023-11-24&to=2023-11-24&sortBy=popularity&apiKey=139a835220df4f17ab3a3ffa6713ff8d`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={data}>{props.children}</NewsContext.Provider>
  );
};
