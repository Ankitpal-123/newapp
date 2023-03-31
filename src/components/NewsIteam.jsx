import React from "react";
import NewsModal from "./NewsModal";

function NewsIteam({ newsItem }) {
  const imageUrl = newsItem.urlToImage
    ? newsItem.urlToImage
    : "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/15/w1200X800/PM-Modi-IndependenceDay.jpeg";
  return (
    <>
      <div className="border-solid border-black border-2 w-72">
        <div className="">
          <img src={imageUrl} alt="" />
          <div className="">
            <h1 className="font-bold">Title: {newsItem.title}</h1>
            <p>Auther: {newsItem.author}</p>
            <p>{newsItem.description}</p>
            <p>{newsItem.publishedAt}</p>

            <div className="flex justify-center items-center ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                read More
              </button>
            </div>
          </div>
        </div>
        <NewsModal newsItem={newsItem} imgUrl={imageUrl} />
      </div>
    </>
  );
}

export default NewsIteam;
