import React from "react";
import axios from "axios";
import { Formik } from "formik";

function Edit(props) {
  const getDetail = async () => {
    const url = `http://localhost:1312/listOrder/detail/${props.id}`;
    console.log(url);
    try {
      let respond = await axios.get(url);
      setState((values) => ({
        ...values,
        nisn: respond.data.data?.nisn,
        tglBayar: respond.data.data?.tglBayar,
        bulanDibayar: respond.data.data?.bulanDibayar,
        tahunDibayar: respond.data.data?.tahunDibayar,
        jumlahBayar: respond.data.data?.jumlahBayar,
        id: respond.data.data?.id,
      }));
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
  const [state, setState] = React.useState({
    nisn: "",
    tglBayar: "",
    bulanDibayar: "",
    tahunDibayar: "",
    jumlahBayar: "",
  });
  const onSubmit = async (values) => {
    const url = `http://localhost:1312/listOrder/perbarui/${props.id}`;

    try {
      let result = await axios.put(url, values);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  // [pop]

  if (!props.pop) {
    return null;
  }
  return (
    <div>
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
                Edit item
              </h1>
              <svg
                data-cy="modal-add-close-button"
                onClick={() => {
                  props.setPop(false);
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
              <Formik
                initialValues={state}
                // validationSchema={LoginSchema}
                enableReinitialize
                onSubmit={onSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
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
                          data-cy="modal-add-name-input"
                          name="nisn"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nisn}
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
                          Tanggal
                        </label>
                        <input
                          data-cy="modal-add-name-input"
                          name="tglBayar"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tglBayar}
                          id="tglBayar"
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
                          Bulan
                        </label>
                        <input
                          data-cy="modal-add-name-input"
                          name="bulanDibayar"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.bulanDibayar}
                          id="bulanDibayar"
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
                          data-cy="modal-add-name-input"
                          name="tahunDibayar"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tahunDibayar}
                          id="tahunDibayar"
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
                        Jumlah
                      </label>
                      <input
                        data-cy="modal-add-name-input"
                        name="jumlahBayar"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.jumlahBayar}
                        id="jumlahBayar"
                        placeholder="Tambahkan nama activity"
                        type="number"
                        className="border outline-none h-12 rounded-lg border-gray-300 px-3 popin focus:border-blue-500"
                      />
                    </div>
                    <div className="flex items-end justify-end py-10 px-10">
                      <button
                        onClick={() => {
                          props.setPop(false);
                        }}
                        type="submit"
                        className="bg-gray-800 mt-11 w-5/12 text-white font-bold tracking-wider py-5 px-4 rounded-full cursor-pointer  transition-all hover:bg-gray-900"
                      >
                        Submit
                      </button>
                    </div>
                    </form>
                )}
              </Formik>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}



export default Edit
