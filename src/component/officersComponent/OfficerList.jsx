import React from 'react'

function OfficerList(props) {
  return (
    <div className=" border-4 border-white bg-[#323232] justify-center h-96 w-72 rounded-xl grid -mb-16 shadow-lg">
    <div className="animate-pulse w-24 mt-12 h-24 mx-auto rounded-full bg-slate-700"></div>
    <div className="center flex flex-col text-left justify-center  mx-auto gap-x-3 text-white font-semibold">
      <h1>Nama : {props.namaPetugas}</h1>
      <h1>Username : {props.username}</h1>
      <h1>level : {props.level}</h1>
    </div>
  </div>
  )
}

export default OfficerList