export default function SearchBar() {
  return (
    <div className="form-row justify-content-center w-65 center-div">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter webpage URL"
        />
        <button
          className="btn p-3 btn-outline-secondary bg-primary border-primary text-white w-15"
          type="button"
          id="button-addon2"
        >
          Start
        </button>
      </div>
    </div>
  );
}
