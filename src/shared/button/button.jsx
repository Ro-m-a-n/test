import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Button.scss";

export const Button = ({
  design,
  size,
  disabled,
  children,
  loading,
  handleClick,
  stackClassName,
  ...props
}) => {
  const classes = [
    "Button",
    `Button_design__${design}`,
    `Button_size__${size}`,
  ];

  return (
    <div className={`${stackClassName} Button_wrapper`}>
      <button
        {...props}
        // TODO
        // eslint-disable-next-line react/button-has-type
        disabled={loading || disabled}
        className={classes.join(" ")}
        onClick={handleClick}
      >
        {loading ? (
          <CircularProgress
            color={design === "primary" ? "primary" : "secondary"}
            size="22px"
          />
        ) : (
          children
        )}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: "button",
  size: "medium",
  loading: false,
  disabled: false,
  handleClick: undefined,
};

export default Button;
