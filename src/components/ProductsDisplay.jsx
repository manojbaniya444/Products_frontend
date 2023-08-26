import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ProductsDisplay = ({ data }) => {
  return (
    <ProductDisplayWrapper>
      <h2>Products</h2>

      <div className="all__products">
        {data?.map((item, index) => {
          return (
            <Link
              key={item?._id}
              style={{ textDecoration: "none" }}
              to={`user-products/${item._id}`}
            >
              <article>
                <div className="image">
                  <img src={item.url} alt="product-image" />
                </div>
                <div className="article__description">
                  <h4>Product name: {item.productName}</h4>
                  <p>Price: {item.price}</p>
                  <p>Added by: {item.addedBy}</p>
                  <p>
                    Stock:
                    <span
                      style={
                        item.stockDetail.available
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      {item.stockDetail.available
                        ? "Available"
                        : "Out of Stock"}
                    </span>
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </ProductDisplayWrapper>
  );
};

const ProductDisplayWrapper = styled.div`
  border-radius: 3px;
  background: #f0f0f0;
  /* background-color: ${({ theme }) => theme.colors.background2}; */
  /* box-shadow: 8px 8px 16px #d4d4d4, -8px -8px 16px #ffffff; */
  margin-top: 2rem;
  max-width: 100%;
  padding-top: 20px;
  margin-bottom: 20px;

  h2 {
    margin-left: 20px;
    font-size: 1.8rem;
  }

  .all__products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 20px 20px 0 20px;
    article {
      /* background-color: ${({ theme }) => theme.colors.background2}; */
      cursor: pointer;
      .image {
        width: 100%;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .article__description {
        padding: 10px;
        h4 {
          font-size: 1rem;
          color: black;
        }
        p {
          color: ${({ theme }) => theme.colors.text2};
          margin-top: 10px;
        }
      }
      &:hover {
        background-color: #dfdfdf;
      }
    }
  }
`;

export default ProductsDisplay;
