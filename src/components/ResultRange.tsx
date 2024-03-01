interface RangeProps {
  numOfRows: number;
  pageObj: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  };
  maxPerPage: number;
}

export default function ResultRange({
  numOfRows,
  pageObj,
  maxPerPage,
}: RangeProps) {
  console.log(numOfRows);

  let pageEnd: number;
  let pageStart: number;
  let info: string;

  if (numOfRows === 0) info = '0 results';
  else {
    pageEnd = pageObj.page * maxPerPage;
    pageStart = pageEnd - maxPerPage + 1;
    info = `${pageStart} - ${pageEnd} of ${numOfRows}`;
  }

  return <p className="d-inline-block p-0 pe-2 pt-3">{info}</p>;
}
