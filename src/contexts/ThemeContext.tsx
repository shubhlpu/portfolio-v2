import React, { createContext, useContext } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;