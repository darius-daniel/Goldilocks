import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb';
import { ToolBarProps } from './ToolBar';

export default function PageButtons({ pageInfo, rowInfo }: ToolBarProps) {
  const { pageNum, pageMax, setPageNum } = pageInfo;
  const { allRows } = rowInfo;
  const lastPage: number = Math.ceil(allRows.length / pageMax);

  let start: number, end: number;
  if (pageNum === 1) {
    start = pageNum;
    end = start + 2;
  } else if (pageNum === lastPage) {
    start = lastPage - 2;
    end = lastPage;
  } else {
    start = pageNum - 1;
    end = pageNum + 1;
  }

  if (start === lastPage) end = start;

  const pageArray: Array<number> = [];
  for (let page: number = start; page <= end; page++) pageArray.push(page);

  return (
    <nav aria-label="Page Navigation" className="w-50 m-auto">
      <ul className="pagination pagination-lg justify-content-end">
        <button
          className="btn btn-white text-primary me-3 pb-2"
          onClick={() => setPageNum((prev) => prev - 10)}
          disabled={pageNum - 10 < 0}
        >
          <TbPlayerTrackPrevFilled />
        </button>
        {pageArray.map((page) => {
          return (
            <button
              key={page}
              className={pageNum === page ? 'btn btn-primary' : 'btn btn-white'}
              onClick={() => setPageNum(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="btn btn-white text-primary ms-3 pb-2"
          onClick={() => setPageNum((prev) => prev + 10)}
          disabled={pageNum + 10 > lastPage}
        >
          <TbPlayerTrackNextFilled />
        </button>
      </ul>
    </nav>
  );
}
