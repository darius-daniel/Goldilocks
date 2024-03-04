interface RangeProps {
  numOfRows: number;
  pageObj: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pageMax: number;
  };
}

export default function ResultRange({ numOfRows, pageObj }: RangeProps) {
  let pageEnd: number;
  let pageStart: number;
  let info: string;
  const pageMax: number = pageObj.pageMax;

  if (numOfRows === 0) info = '0 results';
  else {
    if (numOfRows <= pageObj.pageMax) {
      pageEnd = numOfRows;
      pageStart = 1;
    } else {
      pageEnd = pageObj.page * pageMax;
      pageStart = pageEnd - pageMax + 1;
    }
    info = `${pageStart} - ${pageEnd} of ${numOfRows}`;
  }

  return <p className="d-inline-block p-0 pt-3 me-2">{info}</p>;
}
