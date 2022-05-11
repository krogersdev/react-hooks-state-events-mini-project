import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetails, setDetails] = useState("");
  const [isSelected, setIsSelected] = useState("Code");

  const options = categories
    .filter((category) => category !== "All")
    .map((option) => <option key={uuidv4()}>{option}</option>);

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      text: taskDetails,
      category: isSelected,
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskDetails}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={isSelected}
          onChange={(e) => setIsSelected(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
