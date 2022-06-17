import { createGlobalStyle } from "styled-components";

const reset = `
/* CSS Reset template from respective sources. */
/* https://piccalil.li/blog/a-modern-css-reset/ */
/* https://www.joshwcomeau.com/css/custom-css-reset/ */
/* Some added resets by myself. */

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  font-size: 1rem;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (hover: hover) and (pointer: fine) {
  input,
  textarea {
    border: inherit;
  }
}
`;
const themes = `
:root {
    --bg: white;
    --bg-invert: hsl(30, 5%, 10%);
    --color-gray: rgb(100, 100, 100);
    --color-green: #b0ee6d;
    --color-yellow: #eed66d;
    --color-red: #ee6d6d;
  
    --color-text: hsl(30, 5%, 10%);
  
    --box-shadow: rgba(0, 0, 0, 0.2);
    --box-shadow-dark: rgba(0, 0, 0, 0.5);
  
    --active-padding: 0.9rem;
  }
  
  .darkmode {
    --bg: hsl(30, 5%, 10%);
    --bg-invert: white;
    --color-gray: rgb(175, 175, 175);
    --color-green: hsl(89, 79%, 15%);
    --color-yellow: #927a11;
    --color-red: #921111;
  
    --color-text: hsl(30, 5%, 80%);
  
    --box-shadow: rgba(0, 0, 0, 1);
    --box-shadow-dark: rgba(0, 0, 0, 1);
  }
`;

const GlobalStyles = createGlobalStyle`${reset + themes}`;

export default GlobalStyles;
