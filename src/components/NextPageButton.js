import React from "react";
import PropTypes from "prop-types";

const NextPageButton = ({ next }) => {
  return (
    <div>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default NextPageButton;

NextPageButton.propTypes = {
  next: PropTypes.func
};
