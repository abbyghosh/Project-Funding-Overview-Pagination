import { useEffect, useState } from "react";
import { ROW_LIMIT_DEFAULT } from "../constants/constants";

function usePaginationIndicators(currentPage, totalPages) {
  const [indicators, setIndicators] = useState([]);

  const generatePaginateIndicators = () => {
    const midIndicator = Math.floor(ROW_LIMIT_DEFAULT / 2); // Adjusted for 0-based index
    let rangeStart, rangeEnd;

    if (totalPages <= ROW_LIMIT_DEFAULT) {
      // If total pages are less than or equal to ROW_LIMIT_DEFAULT, show all pages
      rangeStart = 1;
      rangeEnd = totalPages;
    } else if (currentPage <= midIndicator) {
      // If currentPage is in the initial range
      rangeStart = 1;
      rangeEnd = ROW_LIMIT_DEFAULT;
    } else if (currentPage > totalPages - midIndicator) {
      // If currentPage is in the trailing range
      rangeStart = totalPages - ROW_LIMIT_DEFAULT + 1;
      rangeEnd = totalPages;
    } else {
      // Middle range
      rangeStart = currentPage - midIndicator;
      rangeEnd = currentPage + midIndicator;
    }

    // Ensure the range is within valid bounds
    rangeStart = Math.max(1, rangeStart);
    rangeEnd = Math.min(totalPages, rangeEnd);

    // Generate the range
    const range = Array.from({ length: rangeEnd - rangeStart + 1 }, (_, idx) => rangeStart + idx);

    setIndicators(range);
  };

  useEffect(() => {
    generatePaginateIndicators();
  }, [currentPage, totalPages]);

  return { indicators };
}

export default usePaginationIndicators;
