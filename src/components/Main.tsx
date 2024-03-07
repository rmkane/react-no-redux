import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex-grow">
      <button
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count: {count}
      </button>
    </main>
  );
}

export default Main;
