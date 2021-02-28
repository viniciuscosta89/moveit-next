import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../styles/components/GlobalStyles";
import { lightTheme, darkTheme } from "../styles/components/Themes";
import Toogle from '../components/Toggle';
import Cookies from 'js-cookie';


export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState(pageProps.mode ?? 'light');

  useEffect(() => {
    Cookies.set('mode', mode)
  }, [mode])

  function modeToggler() {
    mode === 'light' ? setMode('dark') : setMode('light')
  }

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
        <Component {...pageProps} />
      <Toogle mode={mode} handleChange={modeToggler} />
    </ThemeProvider>
  )
}
