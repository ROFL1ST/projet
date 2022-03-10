import React from "react";
import ListItem from "../../component/historyComponent/ListItem";
import CarouselMonth from "../../component/historyComponent/CarouselMonth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function History() {
  // data
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const getListData = async () => {
    const url = "http://localhost:1312/listOrderHistory";
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
    <div className="antialiased w-4/5 p-12 ">
      <h3 className="font-extrabold text-3xl">History</h3>
      {/* Top */}
      <CarouselMonth></CarouselMonth>
      {/* Top */}
      {/* Center */}
      <div className="content-top mt-20 h-2/6 ml-16 w-10/12 overflow-auto">
        <table>
          <tr className="flex gap-x-64 ml-5">
            <th>Name</th>
            <th>Nisn</th>
            <th>Paid</th>
            <th>Amount</th>
          </tr>
        </table>

        {data === [] ? (
          data?.map((data, index) => (
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
          ))
        ) : (
          <React.Fragment>
            <h1 className="flex items-center justify-center mt-40">Tidak ada data</h1>
          </React.Fragment>
        )}
      </div>
      {/* Center */}
      <div
        data-cy="activity-add-button"
        className="button absolute bottom-5 right-5"
      ></div>
    </div>
  );
}

export default History;
