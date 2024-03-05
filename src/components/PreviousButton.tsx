import { ToolBarProps } from './ToolBar';

export default function Previous({
  rowInfo,
  setDisplayedRows,
  pageInfo,
}: ToolBarProps) {
  const { pageNum, setPageNum, pageMax } = pageInfo;
  const { allRows } = rowInfo;

  const handleClick = () => {
    setPageNum(pageNum > 1 ? pageNum - 1 : 1);

    let start: number; /*= pageNum > 1 ? (pageNum - 1) * pageMax : 0;*/
    let end: number = pageNum * pageMax;

    if (pageNum === 1) start = 0;
    else start = end - pageMax;

    setDisplayedRows(allRows.slice(start, end));
  };

  return (
    <button
      type="button"
      className="btn d-inline text-primary p-0 me-2 ms-2"
      id="btn-prev"
      onClick={handleClick}
      disabled={pageNum === 1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-caret-left"
        viewBox="0 0 16 16"
      >
        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
      </svg>
    </button>
  );
}
