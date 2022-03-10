import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const RegisterSchema = Yup.object().shape({
  nisn: Yup.string().required("Wajib di isi"),
  tglBayar: Yup.string().required("Wajib di isi"),
  bulanDibayar: Yup.string().required("Wajib di isi"),
  tahunDibayar: Yup.string().required("Wajib di isi"),

  jumlahBayar: Yup.string().required("Wajib di isi"),
  
});
function EditPage(props) {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue,  }  = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  const [detail, setdetail] = React.useState([]);
  let { id } = useParams();
  const getDetail = async () => {
    const url = `http://localhost:1312/listOrder/detail/${id}`;
    console.log(url);
    try {
      let respond = await axios.get(url);
      setdetail(respond.data.data);
      console.log(respond.data.data);
    } catch (er) {
      console.log(er);
    }
  };
  React.useEffect(() => {
    const ac = new AbortController();
    getDetail();
    return () => {
      ac.abort();
    };
  }, []);
  const onSubmit = async (values) => {
    const url = `http://localhost:1312/listOrder/perbarui/${id}`;

    try {
      let result = await axios.put(url, values);
      console.log(result);
      navigate("/overview");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white rounded-lg h-screen justify-center items-center flex flex-col">
      <div className="px-10">
        <hr />
        <div className="mt-14 pb-10">
          {detail.map((a, index) => (
            <form key={index} onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-rows-2 gap-x-2 gap-y-10  w-96">
                <div>
                  <label
                    data-cy="modal-add-name-title "
                    htmlFor="title"
                    className="capitalize text-xl pr-3 font-semibold popin"
                  >
                    nominal
                  </label>
                  <input
                    {...register("nominal", { value: a.nominal })}
                    data-cy="modal-add-name-input"
                    name="nisn"
                    id="nisn"
                    placeholder="Tambahkan nama activity"
                    type="text"
                    className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    data-cy="modal-add-name-title "
                    htmlFor="title"
                    className="capitalize text-xl pr-3 font-semibold popin"
                  >
                    Tahun
                  </label>
                  <input
                    {...register("tahun", {
                      value: a.tahun
                    })}
                    data-cy="modal-add-name-input"
                    name="tahun"
                    id="tahun"
                    placeholder="Tambahkan nama activity"
                    type="number"
                    className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
                  />
                </div>
               
              </div>
              <div className="flex items-end justify-end py-10 px-10 bottom-0  right-0">
                <button
                  type="submit"
                  className="bg-gray-800 mt-11 w-5/12 text-white font-bold tracking-wider py-5 px-4 rounded-full cursor-pointer  transition-all hover:bg-gray-900 bottom-0"
                >
                  Submit
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default EditPage;
