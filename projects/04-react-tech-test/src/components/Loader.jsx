import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <img className="loader" src="loader.svg" style={{ height: "64px" }} />
    </div>
  );
};
