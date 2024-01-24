import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavBarBrand = () => {
  return (
    <motion.div
      animate={{
        scale: [2, 3, 3, 2, 2],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 2 }}
    >
      <div className="nav-bar__brand">
        <NavLink to="/">
          <img
            className="nav-bar__logo"
            src="/coding-language.png"
            alt="Auth0 shield logo"
            width="30"
            height="400"
          />
        </NavLink>
      </div>
    </motion.div>
  );
};
