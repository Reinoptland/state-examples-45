import React, { useState } from "react";

export default function DifferentLikeButton() {
  const [clicked, setClicked] = useState(false);

  function like() {
    setClicked(!clicked);
  }

  const buttonText = clicked ? "I liked this" : "I did not like this yet";

  return <button onClick={like}>{buttonText}</button>;

  //   if (clicked === true) {
  //     return (
  //       <div>
  //         <button onClick={like}>I liked this</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <button onClick={like}>I did not like this yet</button>
  //       </div>
  //     );
  //   }
}
