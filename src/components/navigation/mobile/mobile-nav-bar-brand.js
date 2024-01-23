import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="/android-chrome-256x256.png"
          alt="Auth0 shield logo"
          width="82"
          height="24"
        />
      </NavLink>
    </div>
  );
};
