import React from "react";

function Button({ title, handleClick }) {
  return (
    <button
      type="button"
      className="rounded-md bg-white px-3 py-2 text-sm  text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
      onClick={(e) => handleClick(e)}
    >
      {title}
    </button>
  );
}

export default Button;
