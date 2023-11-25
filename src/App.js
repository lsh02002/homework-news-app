import "./App.css";
import { NewsContextProvider } from "./Context/NewsContext";
import News from "./Components/News";

function App() {
  return (
    <div className="App">
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
