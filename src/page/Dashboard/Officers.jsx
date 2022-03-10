import React from 'react'
import axios from "axios";
import LoadingScreen from "react-loading-screen";

import OfficerList from '../../component/officersComponent/OfficerList';
function Officers() {
    const [student, setstudent] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const getListData = async () => {
      const url = "http://localhost:1312/petugas";
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
  return (
    <div className="antialiased w-4/5 p-12">
    <div className=" w-full h-14 top-36 left-48 flex justify-between">
      <div>
        <h2
          data-cy="activity-title"
          className=" font-extrabold text-black text-3xl"
        >
          Officers
        </h2>
      </div>
     
    </div>
    {/* Item */}
    <div className="grid grid-rows-4 mt-24 p-4">
      {/* Isi */}
      {isLoading ? (
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#0D7377"
        ></LoadingScreen>
      ) : (
        student?.map((data, index) => (
          <OfficerList
            key={index}
            id={data.id}
            namaPetugas={data.namaPetugas}
            username={data.username}
            level={data.level}

          ></OfficerList>
        ))
      )}
      {/* Isi */}
    </div>
  </div>
  )
}

export default Officers