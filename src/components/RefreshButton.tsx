export const RefreshButton = () => {
  const handleClick = () => console.log("I don't like these");
  return (
    <button
      className="bg-button w-fit text-secondary text-small font-semibold rounded-lg p-3 mt-10 text-center"
      onClick={handleClick}
    >
      I don't like these
    </button>
  );
};
