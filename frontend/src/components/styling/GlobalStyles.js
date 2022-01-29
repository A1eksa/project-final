import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
    box-sizing:border-box;
    margin: 0;
    padding: 0 0 10rem 0;
    font-family: Raleway, Open-Sans, Roboto, Helvetica, Sans-Serif;
  }

:root {
  --background: #ffffff;
  --level-one: #ffffff;
  --level-two: #ffffff;
  --level-three: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #868686;
  --accent-green: #8CC173;
  --accent-yellow: #e1ad01;
  --box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}


[data-theme='dark'] {
  --background: #121212;
  --level-one: #222222;
  --level-two: #272727;
  --level-three: #2c2c2c;
  --text-primary: #dedede;
  --text-secondary: #999999;
  --accent-green: ####679C4E;
  --accent-yellow: #e1ad01;
  --box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}

`;
