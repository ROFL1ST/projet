import axios from "axios";
import React from "react";
import Loading from "./loading";
import { Link, NavLink } from "react-router-dom";

function Panel() {
  const [item, setItem] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const id = localStorage.getItem("id");
  const getDataPetugas = async (dispatch) => {
    const url = `http://localhost:1312/profile/petugas/${id}`;
    console.log(url);
    try {
      let responds = await axios.get(url);
      console.log(responds);
      setItem(responds.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err, "error");
    }
  };
  React.useEffect(() => {
    getDataPetugas();
  }, []);
  return (
    <div className="panel col-span-1 bg-gray-800 h-screen w-1/5">
      <div className="content justify-center flex flex-row mt-16">
        <h1 className="text-white text-4xl font-bold absolute">Logo</h1>
        <div className="border border-b-2 mt-16 w-48 absolute"></div>
        <ul className=" inline-flex flex-col mt-52 gap-y-10 text-xl text-white ">
          <NavLink
            to="overview"
            className={(navData) =>
              navData.isActive ? "text-[#0D7377] font-bold" : ""
            }
          >
            <li className="flex gap-x-4 items-center hover:text-[#0D7377] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
              </svg>
              <h3>Overview</h3>
            </li>
          </NavLink>
          <NavLink
            to="history"
            className={(navData) =>
              navData.isActive ? "text-[#0D7377] font-bold" : ""
            }
          >
            <li className="flex gap-x-4 items-center hover:text-[#0D7377] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <h3>History</h3>
            </li>
          </NavLink>
          <NavLink
            to="student"
            className={(navData) =>
              navData.isActive ? "text-[#0D7377] font-bold" : ""
            }
          >
            <li className="flex gap-x-4 items-center hover:text-[#0D7377] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <h3>Students</h3>
            </li>
          </NavLink>
          <NavLink
            to="officers"
            className={(navData) =>
              navData.isActive ? "text-[#0D7377] font-bold" : ""
            }
          >
            <li className="flex gap-x-4 items-center hover:text-[#0D7377] cursor-pointer">
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
              <h3>Officers</h3>
            </li>
          </NavLink>
        </ul>
        {isLoading ? (
          <React.Fragment>
            <Loading></Loading>
          </React.Fragment>
        ) : (
          <div className="absolute bottom-10 rounded-xl  account w-64 h-36 bg-[#0D7377]">
            <div className="animate-pulse rounded-full bg-slate-700 h-10 w-10 m-4 ml-5"></div>
            <h1 className="text-white font-bold text-lg -mt-1 pl-6 capitalize">
              {item?.namaPetugas}
            </h1>
            <h2 className="text-white font-medium text-md flex pl-6">
              {item?.level}{" "}
              <span
                onClick={() => {
                  localStorage.clear();
                  window.location.replace("/login");
                }}
                className="pl-20 flex underline cursor-pointer mt-2 hover:text-[#323232]"
              >
                Log Out{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Panel;
