import { useEffect } from "react";
import { themeChange } from "theme-change";

import ThemeChooser from "./ThemeChooser";

function Header() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="sticky top-0 flex flex-row justify-center bg-neutral p-4">
      <h1 className="mb-4 text-4xl font-bold text-secondary">App Name Here</h1>
      <ThemeChooser themes={["light", "dark", "dracula"]} />
    </header>
  );
}

export default Header;
