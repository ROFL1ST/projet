import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function Add(props) {
  const navigate = useNavigate()
  let { id } = useParams();
  console.log(id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    const url = `http://localhost:1312/createPembayaran`;

    try {
      let result = await axios.post(url, values);
      console.log(result);
      navigate("/overview")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-lg h-screen justify-center items-center flex flex-col">
      <div className="justify-center items-center flex flex-col w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-rows-3 gap-x-2 gap-y-10 mx-auto my-auto ">
            <div>
              <label
                data-cy="modal-add-name-title "
                htmlFor="title"
                className="capitalize text-xl pr-3 font-semibold popin"
              >
                Tahun
              </label>
              <input
                {...register("idSpp", { value: id })}
                data-cy="modal-add-name-input"
                name="tahun"
                id="tahun"
                required
                placeholder="Tambahkan nama activity"
                type="number"
                className="hidden border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
              />
              <input
                {...register("tahun")}
                data-cy="modal-add-name-input"
                name="tahun"
                id="tahun"
                required
                placeholder="Tambahkan nama activity"
                type="number"
                className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
              />
            </div>
            <div>
              <label
                data-cy="modal-add-name-title "
                htmlFor="title"
                className="capitalize text-xl pr-3 font-semibold popin"
              >
                nominal
              </label>
              <input
                {...register("nominal")}
                data-cy="modal-add-name-input"
                name="nominal"
                id="nominal"
                required
                placeholder="Tambahkan nama activity"
                type="number"
                className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-start justify-start py-10 px-10 w-20">
            <button
              type="submit"
              className="bg-gray-800 mt-11  text-white font-bold tracking-wider py-5 px-10 rounded-full cursor-pointer  transition-all hover:bg-gray-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
