import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import DifferentLikeButton from "./components/DifferentLikeButton";
import Dinosaurs from "./components/Dinosaurs";
import ArticlesList from "./components/ArticlesList";
import Chuck from "./components/Chuck";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <DifferentLikeButton /> */}
        {/* <LikeCounter /> */}
        {/* <Dinosaurs /> */}
        {/* <ArticlesList /> */}
        <Chuck />
      </header>
    </div>
  );
}

export default App;
