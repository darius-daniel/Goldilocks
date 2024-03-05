interface RangeProps {
  numOfRows: number;
  pageInfo: {
    pageNum: number;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
    pageMax: number;
  };
}

export default function ResultRange({ numOfRows, pageInfo }: RangeProps) {
  let pageEnd: number;
  let pageStart: number;
  let info: string;
  const pageMax: number = pageInfo.pageMax;

  if (numOfRows === 0) info = '0 results';
  else {
    if (numOfRows <= pageInfo.pageMax) {
      pageEnd = numOfRows;
      pageStart = 1;
    } else {
      pageEnd = pageInfo.pageNum * pageMax;
      pageStart = pageEnd - pageMax + 1;
    }
    info = `${pageStart} - ${pageEnd} of ${numOfRows}`;
  }

  return <p className="d-inline-block p-0 pt-3 me-2">{info}</p>;
}
