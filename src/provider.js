import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './context/context';
import { THEME_PROPS } from './config/config';
export const Provider = ({ children }) => {

  const [isSeller, setSeller] = useState(true);
  const [delProd, setDelProd] = useState(null);
  const [flagShareDiv, setFlagShareDiv] = useState(null);

  return (
    <AppContext.Provider value={{
      isSeller, setSeller,
      delProd, setDelProd,
      flagShareDiv, setFlagShareDiv,
    }}>
      <ThemeProvider theme={{ ...THEME_PROPS }}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
