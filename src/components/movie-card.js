import React from "react";
import { Link } from "react-router-dom";
const iconStyle = {
  maxHeight: "200px",
  width: "auto", // Maintain the aspect ratio
};

export const MovieCard = ({ title, date, duration, id, icon }) => (
  <Link to={"/movie/" + id} className="" rel="noopener noreferrer">
    <img
      className="auth0-feature__icon"
      src={icon}
      alt="external link icon"
      style={iconStyle}
    />
    <label className="release_date">{date}</label>
    <h3 className="auth0-feature__headline">{title}</h3>
  </Link>
);
