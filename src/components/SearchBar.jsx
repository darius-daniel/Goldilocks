import { useRef } from 'react';

// function handleSubmit(event, urlRef) {}

export default function SearchBar() {
  let urlRef = useRef(null);

  return (
    <form
      className="form-row justify-content-center center-div mb-3 w-65"
      onSubmit={(event) => {
        event.preventDefault();
        if (urlRef === null) urlRef = 'www.scraping-bot.io';
      }}
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
