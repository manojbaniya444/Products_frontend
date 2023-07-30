import React, { useEffect } from "react";

import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "./utils/auth";

const AdminPage = ({ children }) => {
  const validUser = localStorage.getItem("access-token");

  // TODO: Verify the JWT token here (valid user contains token)

  if (validUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminPage;
