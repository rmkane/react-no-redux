import { sentenceCase } from "change-case";

type ThemeChooserProps = {
  themes: string[];
};

function ThemeChooser(props: ThemeChooserProps) {
  return (
    <select
      data-choose-theme
      className="absolute right-4 top-1/2 h-10 -translate-y-1/2 rounded-md border px-3 focus:outline-none"
    >
      <option value="">Default</option>
      {props.themes.map((theme) => (
        <option key={theme} value={theme}>
          {sentenceCase(theme)}
        </option>
      ))}
    </select>
  );
}

export default ThemeChooser;
