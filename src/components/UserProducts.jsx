import React from "react";
import { styled } from "styled-components";
import { useFetch } from "../hooks/useFetch";
import ProductsDisplay from "./ProductsDisplay";

const UserProducts = () => {
  // Using the custom useFetch hook to fetch the user added products.
  const { data, error, isPending } = useFetch(
    "http://localhost:8080/user-products"
  );

  console.log(data, error);
  return (
    <UserProductsWrapper>
      <ProductsDisplay data={data} error={error} isPending={isPending} />
    </UserProductsWrapper>
  );
};

const UserProductsWrapper = styled.div``;

export default UserProducts;
