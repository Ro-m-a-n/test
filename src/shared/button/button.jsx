import React from "react";
import "./button.css";
export const Button = ({
  design,
  disabled,
  stackClassName,
  text,
  type,
  font,
  onClick,
}) => {
  const classes = ["Button", design, `Text_font__${font}`];

  return (
    <div className={`Button_wrapper ${stackClassName} `}>
      <button
        className={classes.join(" ")}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  font: "normal",
  type: "button",
  handleClick: undefined,
};

export default Button;
