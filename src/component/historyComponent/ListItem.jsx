/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Link, NavLink } from "react-router-dom";

function ListItem(props) {
  const date = new Date(props.tanggal);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthName = months[date.getMonth()];
  // pop

  return (
    <div className="mb-10 ">
      <div
        data-cy="todo-item"
        className={`border flex left-52 top-60 w-full items-center bg-[#C4C4C4] py-7 rounded-lg shadow-xl justify-between`}
      >
        <div>
          <div className="w-full h-full inline-flex gap-x-44 ml-7">
            <div
              data-cy="todo-item-priority-indicator"
              className="items-center justify-center inline-flex"
            >
              <div className="animate-pulse w-6 h-6 mr-4 rounded-full bg-slate-700"></div>
              <h1
                data-cy="todo-item-title"
                className="font-semibold text-lg break-all text-[#303030]"
              >
                {props.nama}
              </h1>
            </div>

            <div className="mr-10">
              <h1
                data-cy="todo-item-title"
                className="font-semibold text-lg break-all text-[#303030]"
              >
                {props.nisn}
              </h1>
            </div>
            <div className="mr-10">
              <h1
                data-cy="todo-item-title"
                className="font-semibold text-lg break-all text-[#303030]"
              >
                {date.getDate()} {monthName} {date.getFullYear()}
              </h1>
            </div>
            <div>
              <h1
                data-cy="todo-item-title"
                className="font-semibold text-lg break-all text-[#303030]"
              >
                Rp.{props.jumlah}
              </h1>
            </div>
          </div>
        </div>
        <div
          data-cy="todo-item-delete-button"
          className="mr-6 text-gray-450 inline-flex items-center gap-x-7"
          onClick={() => {}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
