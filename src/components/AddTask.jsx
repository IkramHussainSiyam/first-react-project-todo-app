import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTask({ addTaskBtn }) {
  // update input value
  const [task, setTask] = useState("");
  const handleTask = (e) => {
    setTask(e.target.value);
  };
  // add task by pressing "add button"
  const handleAddTaskBtn = () => {
    addTaskBtn(task);
    setTask("");
  };
  // add task by pressing "Enter key"
  const handleAddTaskKey = (e) => {
    if (e.key === "Enter") {
      handleAddTaskBtn();
    }
  };

  return (
    <div className="mb-5 flex items-center w-full h-[52px] bg-[#3b7cd5] p-1 rounded-md">
      <input
        onChange={handleTask}
        onKeyUp={handleAddTaskKey}
        value={task}
        className="px-3 w-full h-full outline-none text-lg"
        type="text"
        placeholder="Add a task here..."
      />
      <button
        onClick={handleAddTaskBtn}
        className="h-full px-4 text-2xl text-white"
      >
        +
      </button>
    </div>
  );
}

export default AddTask;

AddTask.propTypes = {
  addTaskBtn: PropTypes.func,
};
