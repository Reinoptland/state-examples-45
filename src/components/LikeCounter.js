import React, { useState } from "react";

export default function LikeCounter() {
  const numberOfLikes = 0;
  const [likes /** likes: the getter */, setLikes /** the setter */] = useState(
    numberOfLikes
  );

  function handleClick() {
    // likes = likes + 1;
    // likes++;
    // console.log("LIKES?", likes);
    console.log("hello");
    setLikes(likes + 1);
  }

  function superLike() {
    // console.log("CHECK YOURSELF BEFORE YOU WRECK YOURSELF");
    setLikes(likes + 10);
  }

  return (
    <div>
      Number of likes: {likes}
      <div>
        <button onClick={handleClick}>Like this</button>
        <button onClick={superLike}>SUPERLIKE</button>
      </div>
    </div>
  );
}
