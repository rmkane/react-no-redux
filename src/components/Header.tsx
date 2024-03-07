import { useEffect } from "react";
import { Link } from "react-router-dom";

import { themeChange } from "theme-change";

import ThemeChooser from "./ThemeChooser";

function Header() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="sticky top-0 flex flex-row justify-center border-b-2 border-primary bg-neutral p-4">
      <h1 className="mb-4 text-4xl font-bold text-primary">
        <Link to={`/`}>App Name Here</Link>
      </h1>
      <ThemeChooser themes={["light", "dark", "dracula"]} />
    </header>
  );
}

export default Header;
