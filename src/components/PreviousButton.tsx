import { ToolBarProps } from './ToolBar';
import { GrFormPreviousLink } from 'react-icons/gr';

export default function Previous({ pageInfo }: ToolBarProps) {
  const { pageNum, setPageNum } = pageInfo;

  const handleClick = () => {
    setPageNum((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <button
      type="button"
      className="btn d-inline text-primary p-0"
      id="btn-prev"
      onClick={handleClick}
      disabled={pageNum === 1}
    >
      <GrFormPreviousLink size="30px" />
    </button>
  );
}
