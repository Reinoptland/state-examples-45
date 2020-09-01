import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function ArticlesList() {
  const [articles, set_articles] = useState([
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);

  useEffect(() => {
    console.log("HELLO STUDENTS, I AM INSIDE USE EFFECT");
    // make a request here (how?)

    async function fetchArticles() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
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
