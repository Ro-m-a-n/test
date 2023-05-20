import React from "react";

const _Heading = ({ font, size, children, color }) => {
  const classes = ["Heading", `Heading_font__${font} ${color}`];
  if (size && size === "h1") {
    return <h1 className={classes.join(" ")}>{children}</h1>;
  } else if (size === "h2") {
    return <h2 className={classes.join(" ")}>{children}</h2>;
  }
  return <h3 className={classes.join(" ")}>{children}</h3>;
};

export const Heading = ({ font, size, children, color }) => {
  return (
    <_Heading font={font} size={size} color={color}>
      {children}
    </_Heading>
  );
};
Heading.defaultProps = {
  font: "normal",
};

export default Heading;
