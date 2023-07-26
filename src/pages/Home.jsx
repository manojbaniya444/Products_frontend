import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <h1>Welcome user you are logged in.</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Create Account</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

export default Home;
