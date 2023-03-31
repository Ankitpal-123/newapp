import React, { useState } from "react";

function NewsIteam({ newsItem }) {
  const imageUrl = newsItem.urlToImage
    ? newsItem.urlToImage
    : "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/15/w1200X800/PM-Modi-IndependenceDay.jpeg";
  return (
    <>
      <div className="bg-white p-3 rounded-lg shadow-lg items-center h-auto">
        <img
          className="w-full h-48 object-cover mb-2"
          src={imageUrl}
          alt={newsItem.title}
        />
        <h2 className="text-xl font-bold">{newsItem.title}</h2>
        <p className="text-gray-600">{newsItem.description}</p>
        <div className=" ">
          <button className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
            <a href={newsItem.url}>Read more</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsIteam;
