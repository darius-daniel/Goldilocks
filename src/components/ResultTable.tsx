import useFetch from '../hooks/useFetch';

export default function ResultTable() {
  const records: Array<{ label: string; url: string }> = useFetch(
    'http://localhost:3000/records'
  );

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
          {records.map((record, index) => {
            const serial_no = index + 1;
            const url = record.url;
            const label = record.label;
            return (
              <tr key={serial_no}>
                <td>{serial_no}</td>
                <td>{label.slice(0, 30)}...</td>
                <td>
                  <a href={record.url} className="text-primary-emphasis">
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
