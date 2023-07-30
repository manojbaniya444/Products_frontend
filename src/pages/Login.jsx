import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //! 400 -> User doesn't exist on database error
      //! 401 -> Incorrect password error
      //! 200 -> Logged in successful response

      //!Make this SWITCH CASE
      console.log(response.status);
      if (response.status === 403) {
        const data = await response.json();
        setErrorMessage(data.error);
      } else if (response.status === 401) {
        const data = await response.json();
        setErrorMessage(data.err);
      } else if (response.status === 200) {
        const data = await response.json();
        console.log("Logged in successful.");
        setFormData({
          username: "",
          password: "",
        });
        // console.log(data.accessToken);
        localStorage.setItem("access-token", data.accessToken);
        navigate("/home");
      }
      //! TILL HERE SWITCH CASE REPLACE ELSE IF
    } catch (error) {
      console.log("login catch error", error);
    }
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <form onSubmit={formSubmitHandler}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="fields">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            autoComplete="off"
            value={formData.username}
            onChange={onChangeHandler}
          />
          <label htmlFor="password">Enter your password:</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={onChangeHandler}
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

        <div className="link-to-register">
          Don't have an account? <Link to="/register">Register now</Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 90px;
  h1 {
    text-align: center;
    font-weight: 600;
  }

  .error-message {
    color: #cb0808;
    position: absolute;
    top: 10px;
  }

  form {
    max-width: 500px;
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
    button {
      width: 100px;
      padding: 10px 20px;
      font-size: 1.3rem;
      cursor: pointer;
      border: none;
      border-radius: 9px;
      background-color: ${({ theme }) => theme.colors.main};
      /* color: ${({ theme }) => theme.colors.background}; */
      color: white;
    }
  }
`;

export default Login;
