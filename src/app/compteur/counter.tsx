"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        {count}
        <span className="text-primary">⚡</span>
      </h1>
      <button
        className="bg-primary text-white rounded-full px-4 py-2 font-bold"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me
      </button>
    </div>
  );
};
