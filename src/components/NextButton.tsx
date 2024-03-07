import { ToolBarProps } from './ToolBar';
import { GrFormNextLink } from 'react-icons/gr';

export default function Next({ rowInfo, pageInfo }: ToolBarProps) {
  const { pageNum, setPageNum, pageMax } = pageInfo;
  const { allRows } = rowInfo;
  const lastPage: number = Math.ceil(allRows.length / pageMax);

  const handleClick = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <button
      type="button"
      className="btn d-inline text-primary p-0"
      id="btn-next"
      onClick={handleClick}
      disabled={pageNum === lastPage}
    >
      <GrFormNextLink size="30px" />
    </button>
  );
}
