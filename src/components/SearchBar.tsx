import axios from "axios";
import React from "react";
import { RefObject, useRef } from "react";

interface SearchBarProps {
  setCrawling: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({ setCrawling }: SearchBarProps) {
  let urlRef: RefObject<HTMLInputElement> = useRef(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (urlRef === null) urlRef.current.value = "www.scraping-bot.io";

    axios
      .post("http://localhost:3000/crawler", { url: urlRef.current.value })
      .then(() => console.log("Sent"))
      .catch((error) => console.error(`Error: ${error}`));

    setCrawling(true);
  }

  return (
    <form
      className="form-row justify-content-center center-div mb-3 w-65"
      onSubmit={handleSubmit}
    >
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter website"
          ref={urlRef}
        />
        <button
          className="btn btn-outline-secondary bg-primary border-primary text-white w-15 p-3"
          type="submit"
          id="btn-search"
        >
          Start
        </button>
      </div>
    </form>
  );
}
