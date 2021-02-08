import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 480) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <nav
      className={
        navbar
          ? "navbar navbar-expand-md navbar-custom active  fixed-top"
          : "navbar navbar-expand-md navbar-custom  fixed-top"
      }
    >
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img
          src="assets/images/logo.png"
          className="logoimg"
          alt="alternative"
        />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-awesome fas fa-bars"></span>
        <span class="navbar-toggler-awesome fas fa-times"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                className={navbar ? "padLink" : "padLinknone"}
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                className={navbar ? "padLink" : "padLinknone"}
                to="intro"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                INTRO
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                className={navbar ? "padLink" : "padLinknone"}
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SERVICES
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                className={navbar ? "padLink" : "padLinknone"}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PROJECTS
              </Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                className={navbar ? "padLink" : "padLinknone"}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link page-scroll" href="">
              <Link
                activeClass="active"
                className={navbar ? "padLink" : "padLinknone conmar"}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
