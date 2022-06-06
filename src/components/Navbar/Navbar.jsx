import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink

const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">Cart: ({/* count here */})</span>
      <Link to="/login">
        <button data-cy="navbar-login-logout-button">
          {isAuth ? "Logout" : "Login"}
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
