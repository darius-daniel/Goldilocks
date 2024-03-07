import { ToolBarProps } from './ToolBar';

export default function ResultRange({ rowInfo, pageInfo }: ToolBarProps) {
  let info: string;
  const { pageMax, pageNum } = pageInfo;
  const { allRows } = rowInfo;

  const numOfRows = allRows.length;
  const lastPage: number = Math.ceil(numOfRows / pageMax);

  const pageStart: number = (pageNum - 1) * pageMax;
  let pageEnd: number;

  if (pageNum === lastPage && numOfRows % pageMax !== 0)
    pageEnd = pageStart + (numOfRows % pageMax);
  else pageEnd = pageStart + pageMax;

  if (numOfRows === 0) info = '0 results';
  else info = `${pageStart + 1} - ${pageEnd} of ${numOfRows}`;

  return <p className="d-inline-block p-0 pt-3 me-2">{info}</p>;
}
