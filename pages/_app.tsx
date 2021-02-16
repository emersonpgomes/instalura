import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Themes } from '../src/components/theme';
import { GlobalStyle } from '../src/components/theme/global-style';
import { useTheme } from '../src/hooks/use-theme';

const App = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme(Themes.Light);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
