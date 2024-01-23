import "../styles/components/pagination.css"; // Create a CSS file for styling
import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pagesToShow = 5;

  const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNumber = startPage + index;
        return (
          <button
            key={pageNumber}
            className={`page-number ${
              pageNumber === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className="pagination-button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
