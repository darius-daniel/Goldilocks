import Refresher from './Refresher';
import Next from './NextButton';
import Previous from './PreviousButton';
import ResultRange from './ResultRange';

export interface ToolBarProps {
  rowObj: {
    allRows: Array<{ label: string; url: string }>;
    setAllRows: React.Dispatch<
      React.SetStateAction<Array<{ label: string; url: string }>>
    >;
  };

  setDisplayedRows: React.Dispatch<
    React.SetStateAction<Array<{ label: string; url: string }>>
  >;

  pageObj: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pageMax: number;
  };
}

export default function ToolBar({
  rowObj,
  setDisplayedRows,
  pageObj,
}: ToolBarProps) {
  return (
    <div className="w-65 m-auto d-flex justify-content-end">
      <ResultRange numOfRows={rowObj.allRows.length} pageObj={pageObj} />
      <Refresher
        rowObj={rowObj}
        pageObj={pageObj}
        setDisplayedRows={setDisplayedRows}
      />

      <Previous
        setDisplayedRows={setDisplayedRows}
        pageObj={pageObj}
        rowObj={rowObj}
      />

      <Next
        setDisplayedRows={setDisplayedRows}
        pageObj={pageObj}
        rowObj={rowObj}
      />
    </div>
  );
}
