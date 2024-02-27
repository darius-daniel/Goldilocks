interface ResultTableProps {
  records: { label: string; url: string }[] | [];
}

export default function ResultTable({ records }: ResultTableProps) {
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
          {records.map((record, index) => {
            const serial_no = index + 1;
            <tr key={serial_no}>
              <td>{serial_no}</td>
              <td>{record.label}</td>
              <td>{record.url}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}
