import { createGlobalStyle } from 'styled-components';
import 'typeface-barlow'

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'barlow', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
}`;
