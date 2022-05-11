import React from "react";

function CategoryFilter({ categories, handleClick, filterCategory }) {
  const renderButtons = categories.map((category) => {
    return (
      <button
        className={category === filterCategory ? "selected" : null}
        onClick={() => handleClick(category)}
        key={category}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderButtons}
    </div>
  );
}
export default CategoryFilter;
