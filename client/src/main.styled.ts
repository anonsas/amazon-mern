import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%; 
}

body {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.4rem;
}

// ::selection {
//   background-color: $color-primary;
//   color: $color-white;
// }

ul {
  list-style: none;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

input {
  border: none;
  outline: none;
}
`;
