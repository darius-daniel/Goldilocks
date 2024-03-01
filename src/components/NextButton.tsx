import { ToolBarProps } from './ToolBar';

export default function Next({
  allRows,
  setDisplayedRows,
  pageObj,
}: ToolBarProps) {
  const page = pageObj.page;
  const setPage = pageObj.setPage;
  const pageMax = pageObj.pageMax;

  const handleClick = () => {
    const start = page > 1 ? (page - 1) * pageMax : 0;
    const end = page * pageMax;
    setDisplayedRows(allRows.slice(start, end));

    setPage(page + 1);
  };
  return (
    <button
      type="button"
      className="btn d-inline text-primary p-0"
      id="btn-next"
      onClick={handleClick}
      disabled={page > allRows.length / pageMax}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-caret-right"
        viewBox="0 0 16 16"
      >
        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
      </svg>
    </button>
  );
}