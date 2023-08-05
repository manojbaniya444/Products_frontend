import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";

const AddUserProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    available: true,
    limit: "",
    price: "",
    url: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }
    if (type === "number") {
      setFormData((previous) => ({
        ...previous,
        [name]: +value,
      }));
    }

    if (type === "text" || type === "textarea") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const userProductAddHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/user-product/add", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={userProductAddHandler}>
        <label htmlFor="">Product name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter the product name"
          onChange={handleInputChange}
          value={formData.name}
          required
        />

        <label htmlFor="">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter the price of your product"
          onChange={handleInputChange}
          value={formData.price}
          required
        />

        <label htmlFor="">Description</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter text description"
          onChange={handleInputChange}
          value={formData.description}
          required
        />

        <label htmlFor="">Image url</label>
        <input
          type="text"
          name="url"
          placeholder="Enter the vaild product url"
          value={formData.url}
          onChange={handleInputChange}
        />

        <div className="checkbox">
          <label htmlFor="stock">Stock</label>
          <input
            type="checkbox"
            name="available"
            id=""
            defaultChecked
            onChange={handleInputChange}
            value={formData.available}
          />
        </div>

        <label htmlFor="totalItem">No of items in stock</label>
        <input
          type="number"
          name="limit"
          placeholder="Number of items in the stock"
          value={formData.limit}
          onChange={handleInputChange}
        />
        <button type="submit">Add prduct</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: #0a262f; */
  display: flex;
  justify-content: center;
  padding: 40px;
  form {
    width: 90%;
    max-width: 600px;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    gap: 5px;
    input,
    textarea {
      padding: 5px 10px;
    }

    label {
      font-weight: 400;
    }
    .checkbox {
      display: flex;
      gap: 10px;
      align-items: center;
      cursor: pointer;
    }
    button {
      padding: 10px 20px;
      align-self: flex-start;
      cursor: pointer;
    }
  }
`;

export default AddUserProduct;
