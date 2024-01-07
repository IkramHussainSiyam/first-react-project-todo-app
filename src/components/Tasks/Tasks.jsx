import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

function Tasks({ tasksList, deleteTask }) {
  // generate task date
  let dd = new Date().getDate(),
    mm = new Date().getMonth() + 1,
    yy = new Date().getFullYear();
  const date = `${dd}/${mm}/${yy}`;

  return (
    <div className="space-y-2">
      {tasksList.map((task, index) => (
        <Task key={index} taskId={index} date={date} deleteTask={deleteTask}>
          {task}
        </Task>
      ))}
    </div>
  );
}

export default Tasks;

Tasks.propTypes = {
  tasksList: PropTypes.array.isRequired,
  deleteTask: PropTypes.func,
};
