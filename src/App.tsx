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
  const rowInfo: {
    allRows: Array<{ label: string; url: string }>;
    setAllRows: React.Dispatch<
      React.SetStateAction<Array<{ label: string; url: string }>>
    >;
  } = { allRows, setAllRows };

  const [currentPage, setCurrentPage] = useState(1);
  const pageInfo: {
    pageNum: number;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
    pageMax: number;
  } = { pageNum: currentPage, setPageNum: setCurrentPage, pageMax: 10 };

  const resultsFirstPage = allRows.slice(0, pageInfo.pageMax);
  const [displayedRows, setDisplayedRows] = useState(resultsFirstPage);

  return (
    <>
      <Heading />
      <SearchBar />
      <ToolBar
        setDisplayedRows={setDisplayedRows}
        pageInfo={pageInfo}
        rowInfo={rowInfo}
      />
      <ResultTable displayedRows={displayedRows} />
    </>
  );
}

export default App;
