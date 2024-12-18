import usePaginationIndicators from "../../hooks/usePaginationIndicators";

import { ROW_LIMIT_DEFAULT } from "../../constants/constants";

import "./indicatorsPagination.css";

function PaginateIndicators({ dataLength, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(dataLength / ROW_LIMIT_DEFAULT);

  const { indicators } = usePaginationIndicators(currentPage, totalPages);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const gotoPage = (pageNo) => {
    if (pageNo > 0 && pageNo <= totalPages) {
      console.log("gotoPage ", pageNo);
      setCurrentPage(pageNo);
    }
  };

  return (
    <div className="pagination">
      <button className="pagination__control" onClick={handlePrevPage} disabled={currentPage === 1}>
        ❮
      </button>

      {indicators.map((ele) => (
        <button
          key={`${ele}`}
          className={`pagination__indicator${ele === currentPage ? " active" : ""}`}
          onClick={() => gotoPage(ele)}
        >
          {ele}
        </button>
      ))}

      <button
        className="pagination__control"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        ❯
      </button>
    </div>
  );
}

export default PaginateIndicators;
