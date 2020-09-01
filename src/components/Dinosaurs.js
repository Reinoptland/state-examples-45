import React from "react";

export default function Dinosaurs() {
  const dinosaurs = ["T-rex", "Triceratops", "Velociraptor"];

  return (
    <div>
      {dinosaurs.map((dinosaur, index) => {
        // console.log("DINOSAUR", dinosaur, index);
        return (
          <div key={index}>
            <h1>{dinosaur}</h1>
          </div>
        );
      })}
    </div>
  );
}
