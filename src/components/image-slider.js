import React from "react";
// Create a CSS file for styling
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const h1style = {
  color: "white",
  zIndex: "1",
  fontSize: "15px",
  paddingLeft: "20px",
  margin: " 0 auto",
};

const container = {
  display: "flex",
  flexDirection: "column", // Align items in a column
  alignItems: "center", // Center horizontally
  textAlign: "center",
  position: "relative",
  margin: "10px",
};

const ImageSlider = ({ slides }) => {
  console.log(slides);
  return (
    <section className="scrollport" style={{ zIndex: "1", marginTop: "10px" }}>
      {slides.map((slide, index) => (
        <div key={index} style={container} className="slidercard">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
          >
            <Link to={`/movie/${slide.id}`}>
              <img
                src={"https://image.tmdb.org/t/p/original/" + slide.poster_path}
                alt={slide.title}
                height={"200px"}
              />
            </Link>
            <h1 style={h1style}>{slide.title} </h1>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
