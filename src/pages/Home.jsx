import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import { ProductProvider } from "../context/productContext";

const Home = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("access-token");
    navigate("/login");
  };

  return (
    <Wrapper>
      <ProductProvider>
        <section>
          <FeaturedProducts />
        </section>
      </ProductProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  section {
    padding: 0 1rem;
  }
`;

export default Home;
