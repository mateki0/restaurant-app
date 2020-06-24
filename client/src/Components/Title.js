import React from "react";

const Title = (props) => (
  <div data-testid="title-div" className="menu-container">
    <div className="title-container">
      <h2 data-testid="title-h2">{props.value}</h2>
    </div>
  </div>
);
export default Title;
