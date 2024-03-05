import Refresher from './Refresher';
import Next from './NextButton';
import Previous from './PreviousButton';
import ResultRange from './ResultRange';

export interface ToolBarProps {
  rowInfo: {
    allRows: Array<{ label: string; url: string }>;
    setAllRows: React.Dispatch<
      React.SetStateAction<Array<{ label: string; url: string }>>
    >;
  };

  pageInfo: {
    pageNum: number;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
    pageMax: number;
  };

  setDisplayedRows: React.Dispatch<
    React.SetStateAction<Array<{ label: string; url: string }>>
  >;
}

export default function ToolBar({
  rowInfo,
  pageInfo,
  setDisplayedRows,
}: ToolBarProps) {
  return (
    <div className="w-65 m-auto d-flex justify-content-end">
      <ResultRange rowInfo={rowInfo} pageInfo={pageInfo} />
      <Refresher
        rowInfo={rowInfo}
        pageInfo={pageInfo}
        setDisplayedRows={setDisplayedRows}
      />

      <Previous
        setDisplayedRows={setDisplayedRows}
        pageInfo={pageInfo}
        rowInfo={rowInfo}
      />

      <Next
        setDisplayedRows={setDisplayedRows}
        pageInfo={pageInfo}
        rowInfo={rowInfo}
      />
    </div>
  );
}
