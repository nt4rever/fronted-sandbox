import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const switchThemeHandle = () => {
    if (toggleTheme) {
      const t = theme === "primary" ? "dark" : "primary";
      toggleTheme(t);
    }
  };

  return (
    <div className="px-10 py-3 bg-slate-400 text-white font-semibold text-lg flex justify-between items-center">
      <div>TS practice</div>

      <div className="flex gap-4 items-center">
        <span>{theme}</span>
        <div>
          <button
            className="border-2 border-gray-100 rounded-lg text-base p-1 hover:bg-slate-300"
            onClick={switchThemeHandle}
          >
            Switch Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
