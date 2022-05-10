import React from "react";

// When the delete button is clicked, the task should be removed from the list.
function Task({ task, handleDelete }) {
  
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="task">{task.text}</div>
      <button className="delete" onClick={() => handleDelete(task.text)}>X</button>
    </div>
  );
}

export default Task;


