import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filterCategory, setFilterCategory] = useState("All");

  function handleDelete(text) {
    const filteredTasks = tasks.filter((task) => task.text !== text);
    setTasks(filteredTasks);
  }

  const displayTasks = () => {
    return tasks.filter((task) => {
      if (filterCategory === "All") {
        return true;
      } else {
        return filterCategory === task.category;
      }
    });
  };

  const handleFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleClick={setFilterCategory}
        filterCategory={filterCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList tasks={displayTasks()} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
