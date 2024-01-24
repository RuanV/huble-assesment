import React from "react";
import { motion } from "framer-motion";

const Tag = ({ label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="tag"
        style={{
          backgroundColor: "rgba(249, 249, 249,0.4)",
          maxWidth: "180px",
          textAlign: "center",
          borderRadius: "20px",
          padding: "8px",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
};

export default Tag;
