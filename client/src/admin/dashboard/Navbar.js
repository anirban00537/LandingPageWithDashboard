import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();

  const LoggedmeOut = () => {
    localStorage.removeItem("jwtauth");

    localStorage.removeItem("users");
    history.push("/");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom-admin">
        <Link class="navbar-brand " to="/">
          <img
            src="../../assets/images/logo.png"
            className="navbar-brand-dashboard"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nv-go" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link nav_core_dashboard nv-go-cc" to="/admin">
              Admin
            </Link>

            <Link class="nav-link nav_core_dashboard nv-go-cc" to="/portfolio">
              Portfolio
            </Link>
            <Link class="nav-link nav_core_dashboard nv-go-cc" to="/customer">
              Customer
            </Link>
            <button
              class="nav-link nav_core_dashboard nv-go-cc btn  logout_btn"
              to="/customer"
              onClick={() => {
                LoggedmeOut();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
