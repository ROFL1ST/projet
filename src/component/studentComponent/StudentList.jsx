import React from "react";
import StudentDetail from "./StudentDetail";
function StudentList(props) {
  const [rinci, setRinci] = React.useState(false);
  return (
    <div
      onClick={() => {
        setRinci(true);
        setTimeout(function () {
          setRinci(false);
        }, 3000);
      }}
      className=" border-4 border-white bg-[#323232] justify-center items-center h-80 w-72 rounded-xl grid mb-10 shadow-lg"
    >
      <div className="animate-pulse w-24 mt-12 h-24 mx-auto rounded-full bg-slate-700"></div>
      <div className="center flex flex-col justify-center text-left  mx-auto gap-x-3 text-white font-semibold">
        <h1>Nama : {props.nama}</h1>
        <h1>Alamat : {props.alamat}</h1>
        <h1>Kelas : {props.kelas.namaKelas}</h1>
        <h1>Keterampilan : {props.kelas.kompetensi_keahlian}</h1>
      </div>
      <StudentDetail
        onClose={() => setRinci(false)}
        id={props.id}
        rinci={rinci}
        setRinci={setRinci}
        
      ></StudentDetail>
    </div>
  );
}

export default StudentList;
