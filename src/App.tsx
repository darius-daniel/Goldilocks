import { useState } from "react";
import axios from "axios";
import "./App.css";

import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import ResultTable from "./components/ResultTable";

async function App() {
  const [crawling, setCrawling] = useState(false);

  const fetchRecords = async () => {
    let records = await axios.get("http://localhost:3000/records/");
    if (records instanceof Error) return [];

    return records.data;
  };

  return (
    <>
      <Heading />
      <SearchBar setCrawling={setCrawling} />
      <ResultTable records={crawling ? await fetchRecords() : []} />
    </>
  );
}

export default App;
