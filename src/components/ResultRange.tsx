import useFetch from '../hooks/useFetch';

interface RangeProps {
  currentPage: number;
  maxPerPage: number;
}

export default function ResultRange({ currentPage, maxPerPage }: RangeProps) {
  const recordCount = useFetch('http://localhost:3000/records').length;
  const pageEnd = currentPage * maxPerPage;
  const pageStart = pageEnd - maxPerPage + 1;

  return (
    <p className="d-inline-block p-0 pe-2 pt-3">
      {pageStart} - {pageEnd} of {recordCount}
    </p>
  );
}
