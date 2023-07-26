import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="fields">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            autoComplete="off"
          />
          <label htmlFor="password">Enter your password:</label>
          <input
            type={showPassword ? "password" : "text"}
            required
            placeholder="Enter your password"
          />
          <div className="show-password">
            <input
              className="checkbox"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show password</span>
          </div>
        </div>

        <div className="link-to-register">
          Don't have an account? <Link to="/register">Register now</Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 100px;

  h1 {
    text-align: center;
    font-weight: 600;
  }

  form {
    max-width: 900px;
    width: 90%;
    margin-left: 50%;
    margin-top: 20px;
    transform: translateX(-50%);
    border: 5px solid ${({ theme }) => theme.colors.background2};
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    .fields {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .show-password {
        align-self: start;
        .checkbox {
          cursor: pointer;
        }
        span {
          margin-left: 10px;
          color: ${({ theme }) => theme.colors.text2};
        }
      }

      label {
        font-size: 1rem;
        font-weight: 600;
      }
      input {
        font-size: 1rem;
        padding: 9px;
        border-radius: 9px;
        outline: none;
        border: none;
        background-color: ${({ theme }) => theme.colors.background2};
        font-weight: 200;
        &:focus {
          outline: 2px solid ${({theme}) => theme.colors.main2};
        }
      }
    }
    button {
      width: 100px;
      padding: 10px 20px;
      font-size: 1.3rem;
      cursor: pointer;
      border: none;
      border-radius: 9px;
      background-color: ${({theme}) => theme.colors.main};
      /* color: ${({theme}) => theme.colors.background}; */
      color: white;
    }
  }
`;

export default Login;
