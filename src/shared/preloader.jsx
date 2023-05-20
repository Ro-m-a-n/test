
const Preloader = ({ type }) => {
  if (type === "normal") {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return;
};

Preloader.defaultProps = {
  type: "normal",
};
export default Preloader;
