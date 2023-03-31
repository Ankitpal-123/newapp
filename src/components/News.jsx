import React, { useEffect, useState } from "react";
import NewsIteam from "./NewsIteam";

function News() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const API_KEY = "2b410525fa084d559ce0ad76e9131cba";
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error));
  }, []);

  const pageSize = 4;
  const pageCount = Math.ceil(news.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentNews = news.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className=" mt-5">
        <h2 className="flex justify-center items-center text-3xl font-bold">
          Today's News - headLines
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-5  ">
          {currentNews.map((newsItem, i) => (
            <NewsIteam newsItem={newsItem} key={i} />
          ))}
        </div>
        <div className="mt-5">
          <button
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={handlePrevPage}
          >
            <a href="#">&larr; Previous</a>
          </button>
          <button
            disabled={currentPage === pageCount - 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right "
            onClick={handleNextPage}
          >
            <a href="#">Next &rarr;</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default News;
