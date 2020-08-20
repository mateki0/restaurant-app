import React from "react";

const Title = (props) => (
  <div data-testid="title-div" className="menu-container">
    <div className="title-container">
      <span data-testid="title-h2" class="title-span">
        {props.value}
      </span>
    </div>
  </div>
);
export default Title;
