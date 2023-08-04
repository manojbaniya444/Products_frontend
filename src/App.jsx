import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { Style } from "./GlobalStyle";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import AdminPage from "./AdminPage";
import Navbar from "./components/Navbar";
import SingleProductDetail from "./components/SingleProductDetail";
import UserAccount from "./pages/UserAccount";

const App = () => {
  const theme = {
    colors: {
      background: "#ffffff",
      background2: "#e3e3e3",
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
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route
              path="/products/:productId"
              element={<SingleProductDetail />}
            />
            <Route path="/account" element={<UserAccount />} />
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
