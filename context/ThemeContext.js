import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [temaClaro, setTemaClaro] = useState(true);

  function alternarTema() {
    setTemaClaro(!temaClaro);
  }

  return (
    <ThemeContext.Provider value={{ temaClaro, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
