import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme?: (name: string) => void;
}

const initialState = {
  theme: "primary",
};

export const ThemeContext = createContext<ThemeContextProps>(initialState);

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(initialState.theme);

  const toggleTheme = (name: string) => {
    setTheme(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
