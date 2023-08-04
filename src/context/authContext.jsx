import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AuthContext = createContext();

const initialState = {
  userCredential: {},
};

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInStatusChanged, setLoggedInStatusChanged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access-token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [loggedInStatusChanged]);
  return (
    <AuthContext.Provider
      value={{ isLogin, loggedInStatusChanged, setLoggedInStatusChanged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
