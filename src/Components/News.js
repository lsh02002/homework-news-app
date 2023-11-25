import { useContext, useState } from "react";
import { NewsContext } from "../Context/NewsContext";
import { NewsContent } from "../Components/NewsContent";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./News.css";

const News = () => {
  const data = useContext(NewsContext);
  const [searchInput, setSearchInput] = useState("");
  const [canSearch, setCanSearch] = useState(false);
  const [selectedDate, onChange] = useState(new Date());

  const changeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const clickHandler = () => {
    setCanSearch(true);
  };

  const blurHandler = () => {
    setCanSearch(false);
    setSearchInput("");
  };

  return (
    <div className="main">
      <div className="news-search">
        <input
          type="text"
          name="search"
          onChange={changeHandler}
          value={searchInput}
        />
        <button onClick={clickHandler} onBlur={blurHandler}>
          검색 하기
        </button>
        <Calendar onChange={onChange} value={selectedDate} />
        <h3>
          {new Date(selectedDate).toLocaleDateString("ko", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h3>
        여기에서는 하루치 전(24 * 60 * 60 * 1000) 정도의 기사만 자동 출력됩니다.
        filter를 설정했습니다.
      </div>
      <div className="news-main">
        {canSearch && (
          <div>
            {data
              ? data.articles
                  .filter((item) => {
                    return Object.values(item)
                      .join(" ")
                      .toLowerCase()
                      .includes(searchInput.toLowerCase());
                  })
                  .filter(
                    (news) =>
                      new Date(news.publishedAt).getTime() >
                      new Date(selectedDate).getTime() - 24 * 60 * 60 * 1000
                  )
                  .map((news, index) => (
                    <NewsContent
                      count={index + 1}
                      value={news}
                      key={news.url}
                    />
                  ))
              : "Loading"}
          </div>
        )}
        {!canSearch && (
          <div>
            {data
              ? data.articles
                  .filter(
                    (news) =>
                      new Date(news.publishedAt).getTime() >
                      new Date(selectedDate).getTime() - 24 * 60 * 60 * 1000
                  )
                  .map((news, index) => (
                    <NewsContent
                      count={index + 1}
                      value={news}
                      key={news.url}
                    />
                  ))
              : "Loading"}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
