import React from "react";
export default function SortList(props) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setSort && props.setSort();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [props, props.setSort]);
  if (!props.sort) {
    return null;
  }

  return (
    <div ref={ref}>
      <div className="absolute rounded-lg border w-64 bg-white shadow-md">
        <button
          data-cy="sort-selection"
          onClick={() => {
            props.setAdmin(true);
            props.setPetugas(false);
            props.setSort(false);
          }}
          variant="primary"
          type="button"
          className="border-b w-full hover:bg-gray-100 cursor-pointer px-5 flex space-x-4 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <p data-cy="sort-selection-title" className="capitalize text-xl">
            Admin
          </p>
          {props.admin ? "" : ""}
        </button>
        <button
          data-cy="sort-selection"
          onClick={() => {
            props.setAdmin(false);
            props.setPetugas(true);
            props.setSort(false);
          }}
          type="button"
          className="border-b w-full hover:bg-gray-100 cursor-pointer px-5 flex space-x-4 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          <p data-cy="sort-selection-title" className="capitalize text-xl">
            Officer
          </p>
          {props.petugas ? "" : ""}
        </button>
      </div>
    </div>
  );
}
