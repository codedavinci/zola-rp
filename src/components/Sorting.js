import React from "react";
import PropTypes from "prop-types";

const Sorting = ({ handleSorting }) => (
  <select className="styled-select" onChange={handleSorting}>
    <option value="default">Default</option>
    <option value="az">A-Z</option>
    <option value="priority">Priority</option>
  </select>
);

Sorting.propTypes = {
  handleSorting: PropTypes.func.isRequired
};

export default Sorting;
