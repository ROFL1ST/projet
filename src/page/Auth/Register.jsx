import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Error from "../../component/Error";
import { useDispatch } from "react-redux";
import {authRegister } from "../../redux/actions/authAction";
import SortList from "../../component/historyComponent/SortList";
import * as Yup from "yup";
const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Fill it, please"),
  password: Yup.string().min(8, "Minimum 8 chara").required("Fill it, please"),
  namaPetugas: Yup.string().required("Fill it, please"),
});

function Register() {
  const [sort, setSort] = React.useState(false);
  const [errorBE, setErrorBE] = React.useState([]);
  const [initialState, setInitialState] = React.useState({
    email: "",
    password: "",
    namaPetugas: "",
    level: "",
  });

  console.log(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const result = await dispatch(authRegister(values));
    console.log("result", result);
    if (result.status === "Fail") {
      setErrorBE(result);
    }
    if (result.status === "Success") return navigate("/login");
  };

  // level

  const [admin, setAdmin] = React.useState(true);
  const [petugas, setPetugas] = React.useState(false);

  if (admin) {
    initialState.level = "admin";
  } else if (petugas) {
    initialState.level = "petugas";
  }
  console.log(errorBE);
  return (
    <div className="antialiased h-screen w-screen">
      <div className="flex h-full w-full">
        <div className="left col-span-2 bg-gray-800 h-full w-3/5"></div>
        <div className="right w-full flex justify-center pt-7 ">
          <div className="top absolute pt-8 flex justify-between mx-auto items-center ">
            <h1 className="font-bold text-2xl pr-64">Logo</h1>
            <h5 className="text-gray-500 cursor-default pl-96">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </span>
            </h5>
          </div>
          <div className="flex flex-col justify-center w-full mt-1 sm:mt-5 ml-24">
            <div className="ml-10 mb-10">
              <h1 className="font-extrabold text-5xl mb-4">Sign Up For Free</h1>
              <h1 className="font-bold text-2xl">Welcome Back!</h1>
            </div>
            <Formik
              initialValues={setInitialState}
              validationSchema={RegisterSchema}
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
                <form
                  name="Feedback form"
                  onSubmit={handleSubmit}
                  className="flex flex-col  bg-modal-2 py-5 px-10 rounded mt-1"
                >
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col">
                      <label
                        className="font-bold text-lg pb-2 "
                        htmlFor="email"
                      >
                        Username
                      </label>
                      <input
                        error={errors.username && touched.username}
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        className="py-5 px-4 w-3/4 rounded-xl border border-solid border-green-800 text-gray-000 placeholder-gray-000 font-semibold"
                      />
                      {errors.username && touched.username && (
                        <Error>{errors.username}</Error>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold text-lg pb-2" htmlFor="nama">
                        Nama
                      </label>
                      <input
                        error={errors.namaPetugas && touched.namaPetugas}
                        type="namaPetugas"
                        name="namaPetugas"
                        id="namaPetugas"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.namaPetugas}
                        className="py-5 px-4 rounded-xl w-3/4 border border-solid border-green-800 text-gray-000 placeholder-gray-000 font-semibold"
                      />
                      {errors.namaPetugas && touched.namaPetugas && (
                        <Error>{errors.namaPetugas}</Error>
                      )}
                    </div>
                    <div className="flex flex-col mt-5">
                      <label
                        className="font-bold text-lg pb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        error={errors.password && touched.password}
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className="py-5 px-4 rounded-xl w-3/4 border border-solid border-green-800 text-gray-000 placeholder-gray-000 font-semibold"
                      />
                      {errors.password && touched.password && (
                        <Error>{errors.password}</Error>
                      )}
                    </div>
                    <div className="flex flex-col mt-5">
                      <label className="font-bold text-lg pb-2" htmlFor="level">
                        Level
                      </label>

                      <div
                        onClick={() => {
                          setSort(true);
                        }}
                        className="border border-solid border-green-800 font-bold rounded-xl py-5 justify-between inline-flex px-4 w-3/4"
                      >
                        {initialState.level}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <SortList
                        onClose={() => setSort(false)}
                        sort={sort}
                        setSort={setSort}
                        admin={admin}
                        setAdmin={setAdmin}
                        petugas={petugas}
                        setPetugas={setPetugas}
                      ></SortList>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-gray-800 mt-10 w-1/3 text-white font-bold tracking-wider py-5 px-4 rounded-xl cursor-pointer  transition-all hover:bg-gray-900"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </Formik>
          </div>
          <div className="bottom flex justify-between mx-auto items-center ">
            p
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
