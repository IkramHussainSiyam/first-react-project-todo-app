import React, { useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks/Tasks";
import EmptyMessage from "./EmptyMessage";

function Todo() {
  const [tasksList, setTasksList] = useState([]);
  const handleAddTask = (task) => {
    if (task) {
      const newTasksList = [...tasksList, task];
      setTasksList(newTasksList);
    }
  };
  // delete task
  const handleDeleteTask = (todoItem) => {
    const newTasksList = tasksList.filter((_, index) => index !== todoItem);
    setTasksList(newTasksList);
  };

  return (
    <div className="bg-[#f4f4f4] w-[600px] p-[20px] rounded-lg">
      {/* add task */}
      <AddTask addTaskBtn={handleAddTask} />
      {/* tasks list */}
      <Tasks tasksList={tasksList} deleteTask={handleDeleteTask} />
      {/* empty task message */}
      {tasksList.length === 0 && <EmptyMessage />}
    </div>
  );
}

export default Todo;
