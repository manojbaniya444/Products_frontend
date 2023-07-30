import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const SingleProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/v1/products/${productId}`
      );
      console.log(response.data);
      setLoading(false);
      if (response.status === 200) {
        setSingleProduct(response.data);
      }
    };

    fetchSingleProduct();
  }, []);

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading</h1>;

  return (
    <Wrapper>
      <article className="article">
        <div className="article__image">
          <img
            src={singleProduct?.url}
            loading="lazy"
            alt="single-product-image"
          />
        </div>
        <div className="article__description">
          <p className="article__description__name">
            Product name: {singleProduct?.productName}
          </p>
          <p className="article__description__price">
            Price: {singleProduct?.price}
          </p>
          <p className="article__description__stock">
            Stock: {`${singleProduct?.stock ? "Available" : "Out of stock"}`}
          </p>
          <p className="article__description__desc">
            Description: {singleProduct?.description}
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

// TODO: Style this page
//* Style this page
//! style this page

const Wrapper = styled.div`
  .article {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    .article__image {
      margin-left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .article__description {
      margin-top: 20px;
      text-align: center;
      p {
        font-size: 1.3rem;
        font-weight: 400;
      }
    }
  }
`;

export default SingleProductDetail;