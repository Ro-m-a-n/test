import React from "react";

import { Tooltip } from "react-tooltip";

export const ToolTip = ({ id, type, children, value }) => {
  if (type === "normal") {
    return (
      <div className="tooltip_wrapper">
        <a
          data-tooltip-id={id}
          data-tooltip-content={value}
          data-tooltip-float={true}
          data-tooltip-place={"bottom"}
          data-tooltip-offset={25}
        >
          {children}
        </a>
        <Tooltip id={id} noArrow={true} className={"tooltip"} />
      </div>
    );
  }
};

ToolTip.defaultProps = {
  type: "normal",
};

export default ToolTip;
