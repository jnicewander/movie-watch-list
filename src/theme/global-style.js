import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`