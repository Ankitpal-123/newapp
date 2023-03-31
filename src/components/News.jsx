import React, { useEffect, useState } from "react";
import NewsIteam from "./NewsIteam";
import SampleJson from "../assets/sampleJson.json";

function News() {
  const news = SampleJson.articles;
  // console.log(news);

  // const [news, setNews] = useState([]);

  useEffect(() => {
    const API_KEY = "2b410525fa084d559ce0ad76e9131cba";
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="ml-20 mt-5">
        <h2 className="flex justify-center items-center text-2xl font-bold">
          Today's News - headLines
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-5  ">
          {news
            ? news.map((newsItem, i) => (
                <NewsIteam newsItem={newsItem} key={i} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default News;
