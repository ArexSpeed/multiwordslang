import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [color, setColor] = useState("white");
  return (
    <GlobalContext.Provider
      value={{ color: [color, setColor] }}
    >
      {children}
    </GlobalContext.Provider>
  );
};