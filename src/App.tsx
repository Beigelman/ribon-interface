import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import Routes from "./config/routes";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
