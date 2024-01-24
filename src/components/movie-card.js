import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const iconStyle = {
  maxHeight: "200px",
  width: "auto", // Maintain the aspect ratio
};

export const MovieCard = ({ title, date, duration, id, icon }) => (
  <Link to={"/movie/" + id} className="" rel="noopener noreferrer">
    <motion.div
      animate={{ x: [5, 100, 0] }}
      transition={{ ease: "easeOut", duration: 2 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
    >
      <img
        className="auth0-feature__icon"
        src={icon}
        alt="external link icon"
        style={iconStyle}
      />
      <label className="release_date">{date}</label>
      <h3 className="auth0-feature__headline">{title}</h3>
    </motion.div>
  </Link>
);
