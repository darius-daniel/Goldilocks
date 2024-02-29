import RefreshTable from './RefreshTable';
import Next from './NextButton';
import Previous from './PreviousButton';
import ResultRange from './ResultRange';

export default function ToolBar() {
  return (
    <div className="w-65 m-auto d-flex justify-content-end">
      <ResultRange currentPage={1} maxPerPage={15} />
      <RefreshTable />
      <Previous />
      <Next />
    </div>
  );
}
