import { RefObject, useRef, useState } from 'react';
import usePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';

export default function SearchBar() {
  let urlRef: RefObject<HTMLInputElement> = useRef(null);
  const initialState = useFetch('http://localhost:3000/status');
  const [running, setRunning] = useState(initialState);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (urlRef.current !== null) {
      usePost('http://localhost:3000/crawler', {
        url: urlRef.current.value,
      });
      setRunning(true);
    }
  }

  function handleStop() {
    setRunning(false);
    usePost('http://localhost:3000/stop', { isRunning: false });
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
          onClick={handleStop}
          disabled={running === false}
        >
          Stop
        </button>
      </div>
    </form>
  );
}
