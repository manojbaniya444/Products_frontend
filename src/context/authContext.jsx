import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  userCredential: {},
};

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
