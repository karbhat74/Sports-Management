import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  return { isAuthenticated, login, logout };
};

export default useAuth;
