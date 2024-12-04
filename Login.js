import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
    alert("Login Successful!");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
