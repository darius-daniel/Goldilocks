import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import ResultTable from './components/ResultTable';
import ToolBar from './components/ToolBar';

import './App.css';
import { useState } from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const records: Array<{ label: string; url: string }> = useFetch(
    'http://localhost:3000/records'
  );

  const [allRows, setAllRows] = useState(records);
  const rowObj: {
    allRows: Array<{ label: string; url: string }>;
    setAllRows: React.Dispatch<
      React.SetStateAction<Array<{ label: string; url: string }>>
    >;
  } = { allRows, setAllRows };

  const [currentPage, setCurrentPage] = useState(1);
  const pageObj: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pageMax: number;
  } = { page: currentPage, setPage: setCurrentPage, pageMax: 10 };

  const resultsFirstPage = allRows.slice(0, pageObj.pageMax);
  const [displayedRows, setDisplayedRows] = useState(resultsFirstPage);

  return (
    <>
      <Heading />
      <SearchBar />
      <ToolBar
        setDisplayedRows={setDisplayedRows}
        pageObj={pageObj}
        rowObj={rowObj}
      />
      <ResultTable displayedRows={displayedRows} />
    </>
  );
}

export default App;
