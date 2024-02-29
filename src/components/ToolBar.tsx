import RefreshTable from './RefreshTable';
import Next from './NextButton';
import Previous from './PreviousButton';

export default function ToolBar() {
  return (
    <div className="w-65 m-auto mb-3">
      <RefreshTable />
      <Previous />
      <Next />
    </div>
  );
}
