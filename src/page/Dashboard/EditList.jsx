import React from "react";
import { Outlet, Link } from "react-router-dom";

function EditList() {
  return (
    <div className="antialiased w-4/5 p-12 ">
      <div className="inline-flex items-center gap-x-6">
        <Link to="/overview">
          <svg
            data-cy="todo-back-button"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <h3 className="font-extrabold text-3xl">Edit</h3>
      </div>
      <Outlet />
    </div>
  );
}

export default EditList;
