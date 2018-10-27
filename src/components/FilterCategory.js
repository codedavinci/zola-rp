import React from "react";
import PropTypes from "prop-types";

const FilterCategory = ({ categories, categoryChecked, handleFilter }) => (
  <div className="filter-wrapper">
    {categories.map(c => {
      return (
        <div key={c}>
          <input
            type="radio"
            className="filter"
            checked={categoryChecked === c}
            onChange={handleFilter}
            value={c}
          />
          {c}
        </div>
      );
    })}
  </div>
);

FilterCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryChecked: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired
};

export default FilterCategory;
