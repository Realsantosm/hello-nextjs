"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mx-auto">
      <h2 className="text-8xl font-bold">
        <span className="">
        Counter: {count > 10 ? "🔥" : count < -10 ? "💔" : ""} {count}
        </span>
        </h2>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
