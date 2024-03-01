import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import ResultTable from './components/ResultTable';
import ToolBar from './components/ToolBar';

import './App.css';
import { useState } from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const allRows: Array<{ label: string; url: string }> = useFetch(
    'http://localhost:3000/records'
  );
  const [displayedRows, setDisplayedRows] = useState(allRows.slice(0, 15));
  const [currentPage, setCurrentPage] = useState(1);

  const pageObj: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  } = { page: currentPage, setPage: setCurrentPage };

  return (
    <>
      <Heading />
      <SearchBar />
      <ToolBar
        setDisplayedRows={setDisplayedRows}
        pageObj={pageObj}
        allRows={allRows}
      />
      <ResultTable displayedRows={displayedRows} />
    </>
  );
}

export default App;
