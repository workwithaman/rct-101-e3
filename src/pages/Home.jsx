import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <div>{/* Code here */}</div>;
};

export default Home;
