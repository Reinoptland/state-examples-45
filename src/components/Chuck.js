import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Chuck() {
  const [joke, setJoke] = useState(null);

  console.log("WHAT IS JOKE:", joke);

  async function getChuckJoke() {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");

    console.log("RES:", response);
    setJoke(response.data.value);
  }

  useEffect(() => {
    getChuckJoke();
  }, []);

  return (
    <div>
      <h1>{joke}</h1>
      <button onClick={getChuckJoke}>MORE NORRIS</button>
    </div>
  );
}

// 1. X import useEffect
// 2. X use the useEffect and pass it a callback
// 3. X Test!
// 4. X import axios
// 5. X make a request to the chuck norris api (async function)
// 6. X check the response
// 7. X import a useState hook
// 8. X setJoke with the response data
// 9. X display the joke

// 1. Create a button
// 2. add an event listener
// 3. Make the request again
