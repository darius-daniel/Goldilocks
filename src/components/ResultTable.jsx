export default function ResultTable({ results }) {
  return (
    <>
      <table className="table table-sm w-65 center-div" cellPadding="5px">
        <thead className="text-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            <tr id={index}>
              <td>{index}</td>
              <td>{result.title}</td>
              <td>{result.url}</td>
            </tr>;
          })}
        </tbody>
      </table>
      <br />
      <div>
        <nav
          className="w-65 center-div position-absolute bottom-0 end-0"
          aria-label="Page navigation example"
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
