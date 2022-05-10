import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';


function TaskList({ tasks, handleDelete }) {

  const displayTaskList = tasks.map((task) => {
    return (<Task key={uuidv4()} task={task} handleDelete={handleDelete} />)
  })

  return (
    <div className="tasks">
      {displayTaskList}
    </div>
  );
}

export default TaskList;


// displaying a list of tasks using Task component 

