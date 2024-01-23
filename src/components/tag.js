import React from "react";

const Tag = ({ label }) => {
  return (
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
  );
};

export default Tag;
