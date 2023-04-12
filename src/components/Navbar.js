import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
    
    return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        
        <div className={`navbar-menu`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/song"
            >
              Song
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
   );
};

export default withRouter(Navbar);
