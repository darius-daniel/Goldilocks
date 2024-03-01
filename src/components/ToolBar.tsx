import RefreshTable from './RefreshTable';
import Next from './NextButton';
import Previous from './PreviousButton';
import ResultRange from './ResultRange';

export interface ToolBarProps {
  allRows: Array<{ url: string; label: string }> | [];

  setDisplayedRows: React.Dispatch<
    React.SetStateAction<Array<{ label: string; url: string }>>
  >;

  pageObj: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  };
}

export default function ToolBar({
  allRows,
  setDisplayedRows,
  pageObj,
}: ToolBarProps) {
  return (
    <div className="w-65 m-auto d-flex justify-content-end">
      <ResultRange
        numOfRows={allRows.length}
        pageObj={pageObj}
        maxPerPage={15}
      />
      <RefreshTable />

      <Previous
        setDisplayedRows={setDisplayedRows}
        pageObj={pageObj}
        allRows={allRows}
      />

      <Next
        setDisplayedRows={setDisplayedRows}
        pageObj={pageObj}
        allRows={allRows}
      />
    </div>
  );
}
