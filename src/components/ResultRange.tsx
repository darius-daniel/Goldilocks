interface RangeProps {
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

export default function ResultRange({ rowInfo, pageInfo }: RangeProps) {
  let info: string;
  const { pageMax, pageNum } = pageInfo;
  const { allRows } = rowInfo;

  let pageStart: number = pageNum * pageMax;
  let pageEnd: number = pageStart + pageMax;

  const numOfRows = allRows.length;
  const lastPage: number = Math.ceil(numOfRows / pageMax);

  if (numOfRows <= pageMax) {
    pageEnd = numOfRows;
    pageStart = 1;
  } else if (pageNum === lastPage + 1) {
    pageStart = pageNum * pageMax;
    pageEnd = pageStart + (numOfRows % pageMax);
  }
  if (numOfRows === 0) info = '0 results';
  else info = `${pageStart} - ${pageEnd} of ${numOfRows}`;

  return <p className="d-inline-block p-0 pt-3 me-2">{info}</p>;
}
