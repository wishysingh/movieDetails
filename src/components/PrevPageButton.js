import React from 'react';
import PropTypes from "prop-types";

const PrevPageButton = ({prev}) => {
    return (
        <div>
            <button onClick={prev}>Prev</button>
        </div>
    );
}

export default PrevPageButton;


PrevPageButton.propTypes = {
  prev: PropTypes.func
};
