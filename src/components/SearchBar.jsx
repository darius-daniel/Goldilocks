import axios from 'axios';
import { useRef } from 'react';

export default function SearchBar() {
  let urlRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!urlRef) urlRef.current.value = 'www.scraping-bot.io';

    console.log(urlRef.current.value);

    axios
      .post('http://localhost:3000/', { url: urlRef.current.value })
      .then(() => console.log('Sent'))
      .catch((error) => console.error(`Error: ${error}`));
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
