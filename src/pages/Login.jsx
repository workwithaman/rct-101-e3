import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password:""
  })
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button
        data-cy="login-submit"
        onClick={() => {
          handleAuth(true);
          navigate("/products", { replace: true })
        }}
      >Login</button>
    </div>
  );
};

export default Login;
