import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function ArticlesList() {
  const [articles, set_articles] = useState([]);

  useEffect(() => {
    console.log("HELLO STUDENTS, I AM INSIDE USE EFFECT");
    // make a request here (how?)

    async function fetchArticles() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_offset=10"
      );

      console.log("RESPONSE", response.data);

      // set_articles with data we get from the api

      set_articles(response.data);
    }

    fetchArticles();

    // react will display the articles (magic!)
  }, []);

  function clear() {
    console.log("CLEAR");
    set_articles([]);
  }

  return (
    <div>
      {articles.map((article) => {
        // console.log("ONE ARTICLE", article);
        return (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.body}
          />
        );
      })}
      <button onClick={clear}>CLEAR NOTIFICATIONS</button>
    </div>
  );
}
