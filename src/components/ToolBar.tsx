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
}

export default function ToolBar({ rowInfo, pageInfo }: ToolBarProps) {
  return (
    <div className="w-65 m-auto d-flex justify-content-end">
      <ResultRange rowInfo={rowInfo} pageInfo={pageInfo} />
      <Refresher rowInfo={rowInfo} pageInfo={pageInfo} />
      <Previous pageInfo={pageInfo} rowInfo={rowInfo} />
      <Next pageInfo={pageInfo} rowInfo={rowInfo} />
    </div>
  );
}
