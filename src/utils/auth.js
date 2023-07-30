import jwt from "jsonwebtoken";

export const decodeAndVerifyToken = (token) => {
  try {
    const secret = "donttellanyone123";
    const decodedToken = jwt.verify(token, secret);
    return decodedToken;
  } catch (error) {
    console.log("Catch block error while verifying jwt token", error);
    return null;
  }
};

export const isAuthenticated = () => {
  const decodedToken = decodeAndVerifyToken(jwtToken);

  if (decodedToken) {
    // console.log("decoded token", decodedToken);
    return true;
  } else {
    return false;
  }
};

// export const verifyJWT = () => {
//   const secret = process.env.REACT_APP_SECRET_KEY;
//   const jwtToken = localStorage.getItem("access-token");
//   console.log(jwtToken);

//   const decoded = jwt.verify(jwtToken, secret);
//   console.log(decoded);
// };
