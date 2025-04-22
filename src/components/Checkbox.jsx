const Checkbox = ({ checkHandler }) => {
  return (
    <div className="form-check ms-2">
      <label
        className="form-check-label"
        htmlFor="flexCheckDefault"
        style={{ color: "#fff2f2" }}
      >
        Use Logo ?
      </label>
      <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        onChange={() => {
          checkHandler();
        }}
      />
    </div>
  );
};

export default Checkbox;
