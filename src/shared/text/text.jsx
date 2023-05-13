import React from "react";
import "./text.css";

export const Text = ({ font, children }) => {
  const classes = ["Text", `Text_font__${font}`];
  return <p className={classes.join(" ")}>{children}</p>;
};

Text.defaultProps = {
  font: "normal",
};

export default Text;
