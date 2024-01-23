import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="/android-chrome-256x256.png"
          alt="Auth0 shield logo"
          width="100"
          height="160"
        />
      </NavLink>
    </div>
  );
};
