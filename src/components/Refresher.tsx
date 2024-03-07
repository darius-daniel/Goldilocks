import { ToolBarProps } from './ToolBar';
import axios, { AxiosResponse } from 'axios';

export default function Refresher({ rowInfo, pageInfo }: ToolBarProps) {
  function handleClick() {
    const { setAllRows } = rowInfo;
    const { setPageNum } = pageInfo;
    axios
      .get('http://localhost:3000/records')
      .then((response: AxiosResponse) => {
        setAllRows(response.data);
        setPageNum(1);
      })
      .catch((error: Error) => console.error(`Error: ${error.message}`));
  }

  return (
    <button
      type="submit"
      className="btn d-inline text-primary p-0 ms-2 me-2"
      id="btn-refresh"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-arrow-clockwise"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
        />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
      </svg>
    </button>
  );
}
