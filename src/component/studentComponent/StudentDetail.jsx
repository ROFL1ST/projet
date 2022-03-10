/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import PaymentAdd from "../../page/Dashboard/PaymentAdd";
import { useNavigate } from "react-router-dom";
function StudentDetail(props) {
    const navigate = useNavigate()
  const id = props.id;
  const [detail, setDetail] = React.useState([]);
  const getListDataDetail = async () => {
    const url = `http://localhost:1312/profile/siswa/${id}`;
    console.log(url);
    try {
      let responds = await axios.get(url);
      setDetail(responds?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    const ac = new AbortController();
    getListDataDetail();
    return () => {
      ac.abort();
    };
  }, []);

  if (!props.rinci) {
    return null;
  }
  return (
    <div
      data-cy="modal-add"
      variant="primary"
      className="bg-black bg-opacity-50 z-20 modal absolute inset-0 flex justify-center items-center"
    >
      <div className=" border-0 border-white bg-[#323232] justify-center h-96 w-72 rounded-xl grid -mb-16 shadow-lg">
        <div className="animate-pulse w-24 mt-12 h-24 mx-auto rounded-full bg-slate-700"></div>
        <div className="center flex flex-col justify-center text-left  mx-auto gap-x-3 text-white font-semibold">
          <h1>Nama : {detail.nama}</h1>
          <h1>Alamat : {detail.alamat}</h1>
          <h1>Kelas : {detail.idKelas === 1 ? "RPL" : "TKJ"}</h1>
          <h1>Nomor : {detail.noTelp}</h1>
        </div>
        <button
          onClick={() => {
            navigate(`/addPayment/add/${detail.id}`)
          }}
          type="submit"
          className="bg-gray-800 m-2  text-white font-bold tracking-wider py-1 px-1 rounded-xl cursor-pointer text-sm  transition-all hover:bg-gray-900"
        >
          Add Payment
        </button>
      </div>
    </div>
  );
}

export default StudentDetail;
