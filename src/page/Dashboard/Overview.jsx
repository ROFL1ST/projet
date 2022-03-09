import React from "react";
import ListItem from "../../component/ListItem";
import CarouselMonth from "../../component/CarouselMonth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
function Overview() {
  // data
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const getListData = async () => {
    const url = "http://localhost:1312/listOrder";
    console.log(url);
    try {
      let responds = await axios.get(url);
      console.log(responds);
      setData(responds.data.data);
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

  // add
  const [values, setValues] = React.useState({
    idPetugas: "1",
    nisn: "1243623432",
    tglBayar: "",
    bulanDibayar: "",
    tahunDibayar: "",
    idSpp: "1",
    jumlahBayar: "",
  });

  const handleSubmit = async () => {
    const url = `http://localhost:1312/createPembayaran`;

    try {
      await axios.post(url, values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="antialiased w-4/5 p-12 overflow-auto">
      <h3 className="font-extrabold text-3xl">Overview</h3>
      {/* Top */}
      <CarouselMonth></CarouselMonth>
      {/* Top */}
      {/* Center */}
      <div className="content-top mt-20 h-96 ml-16 w-10/12">
        <table>
          <tr className="flex gap-x-64 ml-5 overflow-hidden">
            <th>Name</th>
            <th>Nisn</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </table>

        {data?.map((data, index) => (
          <ListItem
            key={index}
            getListData={getListData}
            id={data.id}
            nisn={data.nisn}
            tahun={data.tahunDibayar}
            bulan={data.bulanDibayar}
            tanggal={data.tglBayar}
            nama={data.nama}
            alamat={data.alamat}
            jumlah={data.jumlahBayar}
          ></ListItem>
        ))}
      </div>
      {/* Center */}
      <div
        data-cy="activity-add-button"
        className="button absolute bottom-5 right-5"
      >
        <button
          onClick={() => {
            handleSubmit();
            getListData();
          }}
          className="px-12 py-5 gap-x-4 text-white text-xl  bg-[#0D7377] flex rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 my-auto "
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
  );
}

export default Overview;
