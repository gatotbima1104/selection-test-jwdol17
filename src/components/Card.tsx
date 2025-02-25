import React from "react";

export default function Card({ val1, val2 }: { val1: number; val2: number }) {
  return (
    <div className="grid grid-rows-3 border-black border-2 p-2 rounded-lg mb-5">
      <p>{val1}</p>
      <p>-</p>
      <p>{val2}</p>
    </div>
  );
}
