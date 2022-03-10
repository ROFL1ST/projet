/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function StudentAdd(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    const url = `http://localhost:1312/createSiswa`;

    try {
      let result = await axios.post(url, values);
      console.log(result);
      props.setAddSiswa(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (!props.addSiswa) {
    return null;
  }

  console.log(register)
  return (
    <div
      data-cy="modal-add"
      variant="primary"
      className="bg-black bg-opacity-50 z-20 modal absolute inset-0 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg">
        <div className="px-10">
          <div className="flex items-center pt-10 pb-4 space-x-96 justify-between">
            <h1
              data-cy="modal-add-title"
              className="text-3xl popin font-semibold capitalize"
            >
              Add Students
            </h1>
            <svg
              data-cy="modal-add-close-button"
              onClick={() => {
                props.setAddSiswa(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <hr />
          <div className="mt-14 pb-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-x-2 gap-y-10">
                <div>
                  <label
                    data-cy="modal-add-name-title "
                    htmlFor="title"
                    className="capitalize text-xl pr-3 font-semibold popin"
                  >
                    nisn
                  </label>
                  <input
                    {...register("nisn", { required: true })}
                    data-cy="modal-add-name-input"
                    name="nisn"
                    id="nisn"
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
                    Nama Siswa
                  </label>
                  <input
                    {...register("nama", { required: true })}
                    data-cy="modal-add-name-input"
                    name="nama"
                    id="nama"
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
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    data-cy="modal-add-name-input"
                    name="password"
                    id="password"
                    placeholder="Tambahkan nama activity"
                    type="password"
                    className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    data-cy="modal-add-name-title "
                    htmlFor="title"
                    className="capitalize text-xl pr-3 font-semibold popin"
                  >
                    NIS
                  </label>
                  <input
                    {...register("nis", { required: true })}
                    data-cy="modal-add-name-input"
                    name="nis"
                    id="nis"
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
                    Alamat
                  </label>
                  <input
                    {...register("alamat")}
                    data-cy="modal-add-name-input"
                    name="alamat"
                    id="alamat"
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
                    noTelp
                  </label>
                  <input
                    {...register("noTelp")}
                    data-cy="modal-add-name-input"
                    name="noTelp"
                    id="noTelp"
                    placeholder="Tambahkan nama activity"
                    type="number"
                    className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid gap-1 pt-12">
                <label
                  data-cy="modal-add-priority-title"
                  htmlFor=""
                  className="capitalize text-xl font-semibold  popin"
                >
                  Kelas
                </label>
                <select
                  {...register("idKelas", { required: true })}
                  name="idKelas"
                  id="idKelas"
                  className="border rounded-lg h-12 p-3 font-bold"
                >
                  <option
                    data-cy="modal-add-priority-item"
                    value="1"
                    className="px-2 py-4"
                  >
                    RPL
                  </option>
                  <option data-cy="modal-add-priority-item" value="2">
                    TKJ
                  </option>
                </select>
              </div>
              <div className="flex items-end justify-end py-10 px-10 bottom-0  right-0">
                <button
                  type="submit"
                  className="bg-gray-800 mt-11 w-5/12 text-white font-bold tracking-wider py-5 px-4 rounded-full cursor-pointer  transition-all hover:bg-gray-900"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default StudentAdd;
