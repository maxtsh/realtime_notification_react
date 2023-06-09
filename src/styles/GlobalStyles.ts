import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  /* Colors */
  --white: #ffffff;
  --blue-1: #157AFE;
  --gray-1: #F5F7F9;
  --border-1: #d0d7de;
  --main-bg: #F7F7F7;
  --liked: #FF4400;
  --orange-1: #af2f01;
  --orange-2: #f4591f;

  /* Border */
  --pm-br: 8px;

  /* Shadows */
  --pm-bx-sh: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body{
  font-size: 16px;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}


button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`;

export default GlobalStyles;
