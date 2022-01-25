import * as React from 'react';
import { createContext, useContext } from 'react';
import { buildTheme, ColorsProps, defaultColors } from '../Common/colors';

const ThemeContext = createContext<any>(null);
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  colors?: ColorsProps;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  colors = defaultColors,
  children,
}) => {
  const theme = buildTheme(colors);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
