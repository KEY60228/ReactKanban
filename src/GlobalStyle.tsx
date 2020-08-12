import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
  html, body, #app {
    height: 100%;
  }

  body {
    /* https://css-tricks.com/snippets/css/system-front-stack/ */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    overflow-wrap: break-word;
  }
`