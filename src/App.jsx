import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { Style } from "./GlobalStyle";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { Create } from "@material-ui/icons";
import Home from "./pages/Home";

const App = () => {
  const theme = {
    colors: {
      background: "#ffffff",
      background2: "#f5f5f5",
      gray: "#cccccc",
      main: "#FF6600",
      main2: "#ff983f",
      text1: "#1d1f21",
      text2: "#444648",
    },
  };
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Style />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: "#fffff";
  font-family: "Inter", sans-serif;
`;

export default App;
