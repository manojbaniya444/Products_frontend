import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // setUserCredential({ ...userCredential, [name]: value });
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Checking if the password confirmation is correct or not.
  useEffect(() => {
    setPasswordValid(false);
    if (formData.password === formData.confirmPassword) {
      setPasswordValid(true);
    }
  }, [formData]);

  // Form submit and account create handler
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200) {
        setErrorMessage(null);
        console.log("Account create successful.");

        setFormData({
          username: "",
          password: "",
          confirmPassword: "",
        });

        navigate("/login");
      } else if (response.status === 400) {
        console.log("Error creating account.");
        setErrorMessage(data.errorMessage);
      }
    } catch (error) {
      console.log("catch error", error);
    }
  };

  //! need to refactor for the useReducer
  //* need to refactor for the useReducer
  //TODO need to refactor for the useReducer

  return (
    <Wrapper>
      <h1>Create new account</h1>
      <form onSubmit={formSubmitHandler}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="fields">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            autoComplete="off"
            required
            onChange={onChangeHandler}
            value={formData.username}
          />
          <label htmlFor="password">Enter your password:</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            placeholder="Enter your password"
            onChange={onChangeHandler}
            value={formData.password}
          />
          <label htmlFor="password">Confirm password</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Re-enter your password"
            onChange={onChangeHandler}
            name="confirmPassword"
            value={formData.confirmPassword}
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
        <hr />
        <div className="link-to-login">
          Already logged in? <Link to="/">Login now</Link>
        </div>

        <button
          disabled={!passwordValid}
          type="submit"
          className={passwordValid ? "button" : "disabled-button"}
        >
          Create Account
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 5%;

  h1 {
    font-weight: 600;
    text-align: center;
  }
  form {
    margin-top: 20px;
    border: 5px solid ${({ theme }) => theme.colors.background2};
    border-radius: 9px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 91%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    .link-to-login {
      padding: 5px 0;
    }
    .fields {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
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
          outline: 2px solid ${({ theme }) => theme.colors.main2};
        }
      }
    }
    .button {
      padding: 10px 20px;
      font-size: 1.3rem;
      cursor: pointer;
      /* Default stretch behaviour */
      width: fit-content;
      background-color: ${({ theme }) => theme.colors.main};
      color: white;
      border: none;
      border-radius: 9px;
    }
    .disabled-button {
      padding: 10px 20px;
      font-size: 1.3rem;
      cursor: pointer;
      /* Default stretch behaviour */
      width: fit-content;
      background-color: ${({ theme }) => theme.colors.main2};
      color: white;
      border: none;
      border-radius: 9px;
    }
    .error-message {
      color: #eb1313;
      position: absolute;
      top: 10px;
    }
  }
`;

export default CreateAccount;
