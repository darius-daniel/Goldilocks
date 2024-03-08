import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import ResultTable from './components/ResultTable';
import ToolBar from './components/ToolBar';
import PageButtons from './components/PageButtons';

import './App.css';
import { useState } from 'react';
import useFetch from './hooks/useFetch';

export type DBRows = Array<{ label: string; url: string }> | [];
export type PageInfo = {
  pageNum: number;
  pageMax: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};
export type RowInfo = {
  allRows: Array<{ label: string; url: string }>;
  setAllRows: React.Dispatch<
    React.SetStateAction<Array<{ label: string; url: string }>>
  >;
};

function App() {
  const records: Array<{ label: string; url: string }> = useFetch(
    'http://localhost:3000/records'
  );

  const [allRows, setAllRows] = useState<DBRows>(records);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const rowInfo: RowInfo = { allRows, setAllRows };
  const pageInfo: PageInfo = {
    pageNum: currentPage,
    pageMax: 10,
    setPageNum: setCurrentPage,
  };

  return (
    <>
      <Heading />
      <SearchBar />
      <ToolBar pageInfo={pageInfo} rowInfo={rowInfo} />
      <ResultTable rowInfo={rowInfo} pageInfo={pageInfo} />
      <PageButtons pageInfo={pageInfo} rowInfo={rowInfo} />
    </>
  );
}

export default App;
