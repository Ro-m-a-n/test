import defaultPhoto from "../assets/image/dafault.svg";


const Image = ({ type, image }) => {
  if (type === "normal") {
    return (
      <img
        className="user_photo"
        src={image}
        alt="user photo"
        onError={({ currentTarget }) => {
          if (currentTarget.src !== defaultPhoto) {
            currentTarget.src = defaultPhoto;
          }
        }}
      />
    );
  }
};
Image.defaultProps = {
  type: "normal",
};
export default Image;
