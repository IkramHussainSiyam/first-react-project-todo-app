import React, { useState } from "react";
import PropTypes from "prop-types";

function Task({ taskId, children, date, deleteTask }) {
  const [completeTask, setCompleteTask] = useState(false);
  const handleCompleteTask = () => {
    setCompleteTask(!completeTask);
  };

  return (
    <li
      id={taskId}
      className={`bg-[#ffffff] px-4 py-3 rounded-md flex items-center justify-between font-medium`}
    >
      <div className="mr-5">
        <span
          className={`line-clamp-1 ${
            completeTask ? "text-gray-400" : "text-black"
          } ${completeTask && "line-through"}`}
        >
          {children}
        </span>
        <div className={`text-sm mt-1 text-gray-400`}>{date}</div>
      </div>
      <div className="flex items-center gap-2">
        {/* complete button */}
        <button
          onClick={handleCompleteTask}
          className={`${completeTask ? "bg-[#3b7cd5]" : "bg-[#d8e5f7]"} ${
            completeTask ? "text-[#ffffff]" : "text-[#3b7cd5]"
          } font-bold cursor-pointer w-6 h-6 rounded-full text-center`}
        >
          ✓
        </button>
        {/* delete button */}
        <button
          onClick={() => deleteTask(taskId)}
          className={`bg-[#d8e5f7] text-[#3b7cd5] font-bold cursor-pointer w-6 h-6 rounded-full text-center`}
        >
          ✕
        </button>
      </div>
    </li>
  );
}

export default Task;

Task.propTypes = {
  taskId: PropTypes.number,
  children: PropTypes.string.isRequired,
  date: PropTypes.string,
  deleteTask: PropTypes.func,
};
