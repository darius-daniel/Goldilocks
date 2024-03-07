import { useEffect, useState } from 'react';
import { DBRows } from '../App';

interface TableProps {
  rowInfo: {
    allRows: Array<{ label: string; url: string }>;
    setAllRows: React.Dispatch<
      React.SetStateAction<Array<{ label: string; url: string }>>
    >;
  };

  pageInfo: {
    pageNum: number;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
    pageMax: number;
  };
}

export default function ResultTable({ pageInfo, rowInfo }: TableProps) {
  const { pageMax, pageNum } = pageInfo;
  const { allRows } = rowInfo;
  const [displayedRows, setDisplayedRows] = useState<DBRows>(
    allRows.slice(0, pageMax)
  );

  useEffect(() => {
    const end: number = pageNum * pageMax;
    const start: number = end - pageMax;
    setDisplayedRows(allRows.slice(start, end));
  }, [pageInfo.pageNum, rowInfo.allRows]);

  return (
    <div className="table-responsive w-75 w-65 m-auto">
      <table className="table table-hover table-sm">
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
            const { pageNum, pageMax } = pageInfo;
            const serial_no = (pageNum - 1) * pageMax + index + 1;
            const { url, label } = row;

            return (
              <tr key={serial_no}>
                <td>{serial_no}</td>
                <td>{label.slice(0, 40)}...</td>
                <td>
                  <a href={row.url} className="text-primary-emphasis">
                    {url.slice(0, 40)}...
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
