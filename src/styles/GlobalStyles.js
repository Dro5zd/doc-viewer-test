import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.12s linear;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: ${colors.background};
    color: ${colors.primaryTitle};
    font-weight: 400;
    font-size: 16px;
    min-width: 320px;

    &.no-scroll {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;
