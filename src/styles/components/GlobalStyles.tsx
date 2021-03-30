import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.background};
    --blue: ${({ theme }) => theme.blue};
    --blue-dark: ${({ theme }) => theme['blue-dark']};
    --blue-twitter: #2AA9E0;
    --gray-line: ${({ theme }) => theme['gray-line']};
    --green: #4CD62B;
    --number-divisor: ${({ theme }) => theme['number-divisor']};
    --purple: #4527a0;
    --purple-dark: #311b92;
    --red: #f44336;
    --text: ${({ theme }) => theme.text};
    --text-highlight: ${({ theme }) => theme['text-highlight']};
    --title: ${({ theme }) => theme.title};
    --toggle-bg: ${({ theme }) => theme['toggle-bg']};
    --white: ${({ theme }) => theme.white};
    --white-text: #f5f5f5;
    --border-radius: 4px;
    --border-radius-round: 50%;
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
    transition: all 0.3s ease-in-out;
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
