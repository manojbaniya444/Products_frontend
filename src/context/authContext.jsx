import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducers/authReducer";

const AuthContext = createContext();

const initialState = {
  userCredential: {},
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
