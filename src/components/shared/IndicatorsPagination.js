import { useState } from "react";

import "./indicatorsPagination.css";

const numberOfVisibleButtons = 7;
const totalPages = 30;

const IndicatorsPagination = ({ currentPage, handleNextPage, handlePrevPage, gotoPage }) => {
  const renderIndicators = () => {
    const pageNumbers = Array.from(
      { length: totalPages > numberOfVisibleButtons ? numberOfVisibleButtons + 2 : totalPages },
      (_, i) => "A"
    );

    if (currentPage > 4 && currentPage >= totalPages - 4) {
      pageNumbers[0] = 1;
      pageNumbers[1] = "...";
      pageNumbers[2] = currentPage - 6;
      pageNumbers[3] = currentPage - 5;
      pageNumbers[4] = currentPage - 4;
      pageNumbers[5] = currentPage - 3;
      pageNumbers[6] = currentPage - 2;
      pageNumbers[7] = currentPage - 1;
      pageNumbers[8] = currentPage;
    }

    if (currentPage > 4 && currentPage <= totalPages - 4) {
      pageNumbers[0] = 1;
      pageNumbers[1] = "...";
      pageNumbers[2] = currentPage - 2;
      pageNumbers[3] = currentPage - 1;
      pageNumbers[4] = currentPage;
      pageNumbers[5] = currentPage + 2;
      pageNumbers[6] = currentPage + 1;
      pageNumbers[7] = "...";
      pageNumbers[8] = totalPages;
    }

    /* if (currentPage > 4 && currentPage === totalPages) {
      pageNumbers[0] = 1;
      pageNumbers[1] = "...";
      pageNumbers[2] = currentPage - 6;
      pageNumbers[3] = currentPage - 5;
      pageNumbers[4] = currentPage - 4;
      pageNumbers[5] = currentPage - 3;
      pageNumbers[6] = currentPage - 2;
      pageNumbers[7] = currentPage - 1;
      pageNumbers[8] = totalPages;
    } */

    console.log("pageNumbers", pageNumbers);

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => typeof number === "number" && gotoPage(number)}
        className={currentPage === number ? "active" : ""}
        disabled={number === "..."}
      >
        {number}
      </button>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (currentPage > 3) {
      pageNumbers.push(1);
      if (currentPage > 4) pageNumbers.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(totalPages - 1, currentPage + 2);
      i++
    ) {
      pageNumbers.push(i);
    }
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => typeof number === "number" && gotoPage(number)}
        className={currentPage === number ? "active" : ""}
        disabled={number === "..."}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button onClick={handleNextPage} disabled={currentPage === 1}>
        Previous
      </button>

      {renderIndicators()}
      {/* {renderPageNumbers()} */}

      <button onClick={handlePrevPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default IndicatorsPagination;
