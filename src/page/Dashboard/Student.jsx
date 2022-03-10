import React from "react";
import axios from "axios";
import LoadingScreen from "react-loading-screen";
import StudentList from "../../component/studentComponent/StudentList";
import StudentAdd from "../../component/studentComponent/StudentAdd";
function Student() {
  const [student, setstudent] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const getListData = async () => {
    const url = "http://localhost:1312/siswa";
    console.log(url);
    try {
      let responds = await axios.get(url);
      setstudent(responds?.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const ac = new AbortController();
    getListData();
    return () => {
      ac.abort();
    };
  }, []);

  // pop
  const [addSiswa, setAddSiswa] = React.useState(false);

  return (
    <div className="antialiased w-4/5 p-12">
      <div className=" w-full h-14 top-36 left-48 flex justify-between">
        <div>
          <h2
            data-cy="activity-title"
            className=" font-extrabold text-black text-3xl"
          >
            Student
          </h2>
        </div>
        <div data-cy="activity-add-button" className="button">
          <button
            onClick={() => {
              setAddSiswa(true);
            }}
            className="px-6 py-3 gap-x-2 text-white  bg-[#0D7377] flex rounded-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 my-auto "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Tambah
          </button>
        </div>
      </div>
      {/* Item */}
      <div className="grid grid-cols-4 mt-10 p-4 justify-center items-center">
        {/* Isi */}
        {isLoading ? (
          <LoadingScreen
            loading={true}
            bgColor="#f1f1f1"
            spinnerColor="#0D7377"
          ></LoadingScreen>
        ) : (
          student?.map((data, index) => (
            <StudentList
              key={index}
              id={data.id}
              nama={data.nama}
              alamat={data.alamat}
              nisn={data.nisn}
              noTelp={data.noTelp}
              kelas={data.kelas}
            ></StudentList>
          ))
        )}
        {/* Isi */}
      </div>
      <StudentAdd addSiswa={addSiswa} setAddSiswa={setAddSiswa}></StudentAdd>
    </div>
  );
}

export default Student;
