import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import ThemeChooser from "./ThemeChooser";

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
        <ThemeChooser themes={["light", "dark", "dracula"]} />
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
