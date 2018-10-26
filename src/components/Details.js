import React, { Component } from "react";
import PropTypes from "prop-types";

const Details = ({ name, age, category, priority }) => (
  <div className={`details-wrapper back-${priority}`}>
    <h2 className="username">Name: {name}</h2>
    <div className="age">Age: {age}</div>
    <div className="category">category: {category}</div>
  </div>
);

Details.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  priority: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

export default Details;
