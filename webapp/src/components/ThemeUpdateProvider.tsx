import { createContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export const ThemeUpdateContext = createContext((theme: DefaultTheme) =>
  console.error(
    'attempted to set theme outside of a ThemeUpdateContext.Provider'
  )
);

export const UpdateThemeProvider: React.FC<{ theme: DefaultTheme }> = ({
  children,
  theme,
}) => {
  const [myTheme, setMyTheme] = useState(theme);

  return (
    <ThemeProvider theme={myTheme}>
      <ThemeUpdateContext.Provider value={setMyTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};
