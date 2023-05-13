import { useContext, useEffect, useState } from "react";
import "./downloadBlock.css";
import { AppContext } from "../../store/appContext";

const DownloadBlock = ({ font }) => {
  const { downloadedImage, setDownloadedImage } = useContext(AppContext);
  const [status, setStatus] = useState("Upload your photo");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (downloadedImage && !errorMessage) {
      setStatus(downloadedImage.name);
    }
  }, [downloadedImage]);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setStatus("Upload your photo");
      return;
    }
    if (
      selectedFile.type !== "image/png" &&
      selectedFile.type !== "image/jpeg"
    ) {
      setErrorMessage(
        "Invalid file format. Please upload a PNG or JPEG image."
      );
      setStatus("Upload your photo");
      return;
    }
    // Checked if file is valid
    setDownloadedImage(selectedFile);
    setErrorMessage("");
    // File is valid, set it as the state
  };

  return (
    <div className={"DownloadFile_wrap"}>
      <div className={`DownloadFile Text_font__${font}`}>
        <label
          style={{ border: errorMessage && "2px solid red" }}
          htmlFor="upload"
        >
          Upload
        </label>
        <input type="file" id="upload" onChange={handleChange} />
        <span
          style={{
            borderColor: errorMessage && "red",
            borderWidth: errorMessage && "2px",
            color: downloadedImage && !errorMessage && "black",
          }}
          className={"upload_status"}
        >
          {status}
        </span>
      </div>
      {errorMessage && <div className="error_text">{errorMessage}</div>}
    </div>
  );
};

DownloadBlock.defaultProps = {
  font: "normal",
};

export default DownloadBlock;
