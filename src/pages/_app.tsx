import { useState } from 'react';

import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

import { theme } from 'theme/theme';

import 'styles/globals.css';
import 'styles/cotentEntry.scss';


function AppInit():null {
  return null;
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme(colorScheme)}
      >
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <Component {...pageProps} />
        </ColorSchemeProvider>
        <AppInit />
      </MantineProvider>
    </>
  );
}
export default MyApp;