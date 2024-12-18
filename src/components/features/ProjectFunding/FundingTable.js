import "./fundingTable.css";

function FundingTable({ data = [], isLoading = false, pageNo = 1, limit = 5 }) {
  const startIndexNumber = (pageNo - 1) * limit; // (1 - 1) * 5 = 0
  const endIndexNumber = pageNo * limit; // 1 * 5 = 5
  const slicedData = data.slice(startIndexNumber, endIndexNumber);

  return (
    <table aria-label="Project Funding Table" className="funding-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>

      <tbody>
        {isLoading ? (
          <tr className="loading">
            <td colSpan={3}>Loading...</td>
          </tr>
        ) : (
          slicedData.map((project) => (
            <tr key={project["percentage.funded"]}>
              <td>{project["s.no"]}</td>
              <td>{project["percentage.funded"]}</td>
              <td>{project["amt.pledged"]}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default FundingTable;
