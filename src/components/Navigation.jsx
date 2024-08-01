import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { googleSignOut } from "../firebase/googleSignIn";

const Navigation = () => {
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const logout = () => {
    googleSignOut()
  };

  return (
    <div className="z-1  sticky">
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand w-25" to="/">
            <div className="text-white fw-medium logo-text ms-3">devDeejay.in</div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-between w-50 me-5">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/" onClick={handleNavLinkClick}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/profile" onClick={handleNavLinkClick}>
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact" onClick={handleNavLinkClick}>
                  Contact Us
                </NavLink>
              </li>
              {false ? (
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/login" onClick={logout}>
                    <span>Logout</span>
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/signin" onClick={handleNavLinkClick}>
                      Signin
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;