const Button = ({ children, handleSubmit }) => {
  return (
    <button type="submit" onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default Button;
