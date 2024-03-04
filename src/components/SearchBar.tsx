import React, { useState } from 'react';
import { RefObject, useRef } from 'react';
import usePost from '../hooks/usePost';

export default function SearchBar() {
  let urlRef: RefObject<HTMLInputElement> = useRef(null);
  const [running, setRunning] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (urlRef.current !== null) {
      usePost('http://localhost:3000/crawler', { url: urlRef.current.value });
      setRunning(true);
    }
  }

  function handleStop() {
    usePost('http://localhost:3000/stop', { signal: true });
    setRunning(false);
  }

  return (
    <form
      className="form-row justify-content-center mb-3 m-auto w-65"
      onSubmit={handleSubmit}
    >
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter website"
          ref={urlRef}
          disabled={running === true}
        />
        <button
          className="btn bg-primary text-white w-15 p-3"
          type="submit"
          id="btn-search"
          disabled={running === true}
        >
          Start
        </button>
        <button
          className="btn bg-danger text-white w-15 p-3"
          type="button"
          id="btn-stop"
          disabled={running === false}
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </form>
  );
}
