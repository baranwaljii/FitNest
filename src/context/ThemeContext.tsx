import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, darkThemeLargeFont, lightTheme, lightThemeLargeFont } from '../theme/theme';

type ThemeContextType = {
  darkMode: boolean;
  largeFonts: boolean;
  language: string;
  toggleDarkMode: () => void;
  toggleFontSize: () => void;
  setLanguage: (lang: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  largeFonts: false,
  language: 'en',
  toggleDarkMode: () => {},
  toggleFontSize: () => {},
  setLanguage: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [largeFonts, setLargeFonts] = useState(false);
  const [language, setLanguageState] = useState('en');

  // Load saved preferences
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedLargeFonts = localStorage.getItem('largeFonts') === 'true';
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    setDarkMode(savedDarkMode);
    setLargeFonts(savedLargeFonts);
    setLanguageState(savedLanguage);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  // Toggle font size
  const toggleFontSize = () => {
    const newSize = !largeFonts;
    setLargeFonts(newSize);
    localStorage.setItem('largeFonts', String(newSize));
  };

  // Set language
  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Determine which theme to use
  const theme = darkMode
    ? (largeFonts ? darkThemeLargeFont : darkTheme)
    : (largeFonts ? lightThemeLargeFont : lightTheme);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        largeFonts,
        language,
        toggleDarkMode,
        toggleFontSize,
        setLanguage,
      }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
