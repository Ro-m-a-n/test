import { useEffect, useState } from "react";


const Upload = ({ font, name, photo, formik, error, onBlur }) => {
  const defaultStatus = "Upload your photo";
  const [status, setStatus] = useState(defaultStatus);

  useEffect(() => {
    if (!formik.values.photo) {
      setStatus(defaultStatus);
      return;
    }
    setStatus(formik.values.photo.name);
  }, [formik.values.photo]);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    formik.setFieldValue(name, selectedFile);
  };

  return (
    <div className={`DownloadFile_wrap Text_font__${font}`}>
      <div className={`DownloadFile `}>
        <label style={{ border: error && "2px solid red" }} htmlFor={name}>
          Upload
        </label>
        <input
          type="file"
          id={name}
          onChange={handleChange}
          name={name}
          onBlur={onBlur}
        />
        <span
          style={{
            borderColor: error && "red",
            borderWidth: error && "2px",
            color: photo && "black",
          }}
          className={"upload_status"}
        >
          {status}
        </span>
      </div>
      {error && <div className="text_error">{error}</div>}
    </div>
  );
};

Upload.defaultProps = {
  font: "normal",
};

export default Upload;
