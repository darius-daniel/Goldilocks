interface TableProps {
  displayedRows: Array<{ url: string; label: string }> | [];
}

export default function ResultTable({ displayedRows }: TableProps) {
  return (
    <div className="table-responsive w-65 m-auto">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="text-primary">
              #
            </th>
            <th scope="col" className="text-primary">
              Title
            </th>
            <th scope="col" className="text-primary">
              URL
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedRows.map((row, index) => {
            const serial_no = index + 1;
            const url = row.url;
            const label = row.label;
            return (
              <tr key={serial_no}>
                <td>{serial_no}</td>
                <td>{label.slice(0, 30)}...</td>
                <td>
                  <a href={row.url} className="text-primary-emphasis">
                    {url.slice(0, 30)}...
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
