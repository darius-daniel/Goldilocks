import React from 'react';
import { RefObject, useRef } from 'react';
import usePost from '../hooks/usePost';

export default function SearchBar() {
  let urlRef: RefObject<HTMLInputElement> = useRef(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (urlRef.current !== null)
      usePost('http://localhost:3000/crawler', { url: urlRef.current.value });
  }

  return (
    <form
      className="form-row justify-content-center mb-3 ms-auto me-auto w-65"
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
