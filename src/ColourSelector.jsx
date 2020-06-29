// ColourSelector.js
import React from "react";

const ColourSelector = (props) => {
  const onInputChange = (event) => {
    props.onColourSelectorChange(event.target.value);
  };

  return <input type="color" value={props.hex} onChange={onInputChange} />;
};

export default ColourSelector;

// currently this component is uncontrolled (or the input is uncontrolled)
// because we don't have control over the hex
// it's not being set in state

// examples of uncontrolled components

// form onSubmit={onFormSubmit}
// event.target[0].value
