import { useState } from "react";

import "./indicatorsPagination.css";

const numberOfVisibleButtons = 7;
// const totalPages = 30;
const siblingCount = 1;
const boundaryCount = 2;

const IndicatorsPaginationRefactor = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  gotoPage,
  totalPages,
}) => {
  console.log("currentPage ", currentPage, totalPages);

  const renderIndicators = () => {
    const totalPageIndicators = siblingCount * 2 + 1 + boundaryCount * 2;
    console.log("totalPageIndicators ", totalPageIndicators);

    const pageNumbers = Array.from({ length: totalPageIndicators }, (_, i) => {
      if (i < boundaryCount) {
        return i + 1;
      }

      // Get first boundaryCount page indicator
      // if (i < boundaryCount) {
      //   return i + 1;
      // }

      // Get last boundaryCount page indicator
      if (i >= totalPageIndicators - boundaryCount) {
        return totalPages - (totalPageIndicators - i - 1);
      }

      if (i >= boundaryCount) {
        return currentPage - siblingCount + (i - (siblingCount + 1));
      } //                13                +  2 - 1            + 1

      // if (
      //   currentPage > boundaryCount + siblingCount + 1 &&
      //   currentPage < totalPages - (boundaryCount + siblingCount + 1)
      // ) {
      //   return currentPage - siblingCount + (i - (siblingCount + 1));
      // } //                13                +  2 - 1            + 1

      /* if (currentPage <= boundaryCount + 1) {
        return i + 1;
      }

      if (currentPage > 3 && currentPage < totalPages - 3) {
        if (i === 0) {
          return i + 1;
        }
        if (i === 1) {
          return "...";
        }
        if (i > 1) {
          Array.from(length);
        }
      } */

      return "A";
    });

    // currentPage > 3 -> [1] = ... && currentPage < total - 3
    // [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", total]

    return pageNumbers.map((pageNo, index) => (
      <button
        key={index}
        onClick={() => typeof pageNo === "number" && gotoPage(pageNo)}
        className={currentPage === pageNo ? "active" : ""}
        disabled={pageNo === "..."}
      >
        {pageNo}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>

      {renderIndicators()}

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default IndicatorsPaginationRefactor;
