import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <header className="bg-neutral sticky top-0 flex flex-row justify-center p-4">
        <h1 className="text-secondary mb-4 text-4xl font-bold">
          App Name Here
        </h1>
        <select
          data-choose-theme
          className="absolute right-4 top-1/2 h-10 -translate-y-1/2 rounded-md border px-3 focus:outline-none"
        >
          <option value="">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="dracula">Dracula</option>
        </select>
      </header>
      <main className="flex-grow">
        <button
          className="btn btn-primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count: {count}
        </button>
      </main>
      <footer className="footer justify-center p-2">
        Copyright &copy; 2024 | Ryan Kane
      </footer>
    </>
  );
}

export default App;
