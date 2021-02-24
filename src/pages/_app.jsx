import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
  --white: #FFF;
  --background: #F2F3F5;
  --gray-line: #DCDDE0;
  --text: #666666;
  --text-highlight: #B3B9FF;
  --title: #2E384D;
  --red: #E83F5B;
  --green: #4CD62B;
  --blue: #5965E0;
  --blue-dark: #4953B8;
  --blue-twitter: #2AA9E0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: 'Inter', sans-serif;
  }

  body, input, button, textarea {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
    display: inline-block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#b71c1c',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
