import "./Input.css";

const Input = ({
  placeholder,
  helperText,
  font,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className={`Input_wrap`}>
      {value && (
        <div
          style={{
            color: error && "red",
          }}
          className="Input_label"
        >
          {placeholder}
        </div>
      )}
      <input
        className={`Text_font__${font}`}
        type={type}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        style={{
          borderColor: error && "red",
          borderWidth: error && "2px",
        }}
      />
      {helperText && !error && <div className="text_helper">{helperText}</div>}
      {error && <span className="text_error">{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  font: "normal",
  type: "text",
};

export default Input;
