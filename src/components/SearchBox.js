import React from "react";
import '../styles/SearchBox.css';
import PropTypes from "prop-types";

const Searchbox = ({searchClick ,searchChange, placeholder}) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={searchChange}
      />
      <button onClick={searchClick}>search</button>
    </div>
  );
};
export default Searchbox;

Searchbox.propTypes = {
  searchChange: PropTypes.func,
  searchClick: PropTypes.func,
  placeholder: PropTypes.string
};
