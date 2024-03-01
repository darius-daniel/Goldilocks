import { ToolBarProps } from './ToolBar';

export default function Previous({
  allRows,
  setDisplayedRows,
  pageObj,
}: ToolBarProps) {
  const page = pageObj.page;
  const setPage = pageObj.setPage;

  const handleClick = () => {
    setPage(page > 1 ? page - 1 : 0);

    const start = page > 1 ? (page - 1) * 15 : 0;
    const end = page * 15;
    setDisplayedRows(allRows.slice(start, end));
  };

  return (
    <button
      type="button"
      className="btn d-inline text-primary p-0"
      id="btn-prev"
      onClick={handleClick}
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
