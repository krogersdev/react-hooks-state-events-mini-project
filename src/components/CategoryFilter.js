import React from "react";
import { v4 as uuidv4 } from "uuid";

function CategoryFilter({ categories, handleClick, filterCategory }) {
  //
  const renderButtons = () => {
    return categories.map((category) => {
      return (
        <button
          className={category === filterCategory ? "selected" : null}
          onClick={handleClick}
          key={uuidv4()}
        >
          {category}
        </button>
      );
    });
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
