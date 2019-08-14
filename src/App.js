import React, { useState, useContext, Fragment } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Routes from "./routes";
import Themes from "./themes";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const GlobalStyle = createGlobalStyle`
    body {
      background: ${props => props.theme.bodyBackground};
    }
  `;

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </ThemeProvider>
  );
}
