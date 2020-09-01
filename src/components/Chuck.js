import React, { useEffect } from "react";

export default function Chuck() {
  useEffect(() => {
    console.log("let us fetch a joke!");
  }, []);

  return <h1>Hi .. TODO: Joke here</h1>;
}

// 1. X import useEffect
// 2. X use the useEffect and pass it a callback
// 3. X Test!
// 4. import axios
// 5. make a request to the chuck norris api (async function)
// 6. check the response
// 7. import a useState hook
// 8. setJoke with the response data
// 9. display the joke
