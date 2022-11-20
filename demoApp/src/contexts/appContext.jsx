import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppContext.Provider value={{ open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
};
