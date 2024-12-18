import { useState } from "react";

import FundingTable from "./FundingTable";

import useFetch from "../../../hooks/useFetch";
import { URL } from "../../../constants/urls";
import { ROW_LIMIT_DEFAULT } from "../../../constants/constants";
import PaginateIndicators from "../../shared/PaginateIndicators";

import "./projectFunding.css";

const ProjectFunding = () => {
  const [data, errors, isLoading] = useFetch(URL);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="funding-container">
      <FundingTable
        data={data}
        isLoading={isLoading}
        pageNo={currentPage}
        limit={ROW_LIMIT_DEFAULT}
      />

      <PaginateIndicators
        dataLength={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProjectFunding;
