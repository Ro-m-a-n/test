import React from "react";


export const Text = ({ font, children, color }) => {
  const classes = ["Text", `Text_font__${font} ${color}`];
  return <p className={classes.join(" ")}>{children}</p>;
};

Text.defaultProps = {
  font: "normal",
};

export default Text;
