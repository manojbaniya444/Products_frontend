import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import AddUserProduct from "../components/AddUserProduct";

const UserAccount = () => {
  const [currentUser, setCurrentUser] = useState();
  const { isLogin, setLoggedInStatusChanged, looggedInStatusChanged } =
    useAuthContext();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("current-user");
    setLoggedInStatusChanged(!looggedInStatusChanged);
    navigate("/login");
  };
  useEffect(() => {
    setCurrentUser(localStorage.getItem("current-user"));
  }, []);
  return (
    <>
      <Wrapper>
        <p>
          Curret user logged in: {currentUser ? currentUser : "First log in"}
        </p>
        {isLogin ? <button onClick={logoutHandler}>Logout</button> : null}
      </Wrapper>
      <AddUserProduct />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  position: relative;
  p {
    font-size: 1.25rem;
    font-weight: 600;
  }
  button {
    padding: 10px 20px;
    border-radius: 9px;
    cursor: pointer;
    align-self: center;
    user-select: none;
  }
`;

export default UserAccount;
