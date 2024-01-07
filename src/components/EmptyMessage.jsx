import React from "react";
// import PropTypes from "prop-types";
import noteIcon from "../assets/note.svg";

function EmptyMessage() {
  return (
    <div className="grid place-items-center">
      <img width={"100px"} src={noteIcon} alt="note Icon" />
      <p className="text-lg text-gray-400 mt-2">
        No task today. Time to relax!
      </p>
    </div>
  );
}

export default EmptyMessage;

// EmptyMessage.propTypes = {};
