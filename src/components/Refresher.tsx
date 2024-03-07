import { ToolBarProps } from './ToolBar';
import { RiRefreshLine } from 'react-icons/ri';
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
      <RiRefreshLine size="25px" />
    </button>
  );
}
