import React, { Component } from "react";

const ArticleCard = ({ article, idx }) => {
  return (
    <a
      href={article.url}
      className={`h-full ${idx % 8 === 0 ? "md:col-span-2" : ""}`}
      target="_blank"
    >
      <div
        className={`h-full text-white bg-dark-green p-4 rounded-md drop-shadow-lg shadow-slate-500 hover:-translate-y-1 transition-all `}
      >
        <div className="p-4">
          <h3 className="text-lg">{article.title}</h3>
          <h3 className="text-sm">{article.byline.toLowerCase()}</h3>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
