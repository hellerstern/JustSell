import { ThemeProvider } from 'styled-components';
import { THEME_PROPS } from './config/config';

export const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...THEME_PROPS }}>
      {children}
    </ThemeProvider>
  );
};
