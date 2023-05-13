import React from "react";
import "./text.css";
const _Header = ({ font, size, children }) => {
  const classes = ["Header", `Header_font__${font}`];
  if (size && size === "h1") {
    return <h1 className={classes.join(" ")}>{children}</h1>;
  } else if (size === "h2") {
    return <h2 className={classes.join(" ")}>{children}</h2>;
  }
  return <h3 className={classes.join(" ")}>{children}</h3>;
};

export const Header = ({ font, size, children }) => {
  return (
    <_Header font={font} size={size}>
      {children}
    </_Header>
  );
};
Header.defaultProps = {
  font: "normal",
};

export default Header;
