import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import ResultTable from './components/ResultTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <Heading />
      <SearchBar />
      <ResultTable results={[]} />
    </>
  );
}

export default App;
