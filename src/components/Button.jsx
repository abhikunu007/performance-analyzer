const Button = ({ setShowChart }) => {
  const handleToggleChart = () => {
    setShowChart((prev) => !prev);
  };

  return (
    <button
      type="button"
      className="btn btn-dark mt-4 mb-5"
      onClick={handleToggleChart}
    >
      Click here to show chart
    </button>
  );
};

export default Button;
