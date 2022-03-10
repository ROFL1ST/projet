import React from "react";
import ListItem from "../../component/overviewComponent/ListItem";
import CarouselMonth from "../../component/overviewComponent/CarouselMonth";
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





  return (
    <div className="antialiased w-4/5 p-12 ">
      <h3 className="font-extrabold text-3xl">Overview</h3>
      {/* Top */}
      <CarouselMonth></CarouselMonth>
      {/* Top */}
      {/* Center */}
      <div className="content-top mt-20 h-3/5 ml-16 w-10/12 overflow-auto">
        <table>
          <tr className="flex gap-x-60 ml-5">
            <th>Name</th>
            <th>Nisn</th>
            <th>Years</th>
            <th>Amount</th>
          </tr>
        </table>

        {data?.map((data, index) => (
          <ListItem
            key={index}
            getListData={getListData}
            id={data.id}
            nisn={data.nisn}
            tahun={data.tahun}
            nama={data.nama}
            alamat={data.alamat}
            jumlah={data.nominal}
          ></ListItem>
        ))}
      </div>
      {/* Center */}
      <div
        data-cy="activity-add-button"
        className="button absolute bottom-5 right-5"
      >
    
      </div>
    </div>
  );
}

export default Overview;
