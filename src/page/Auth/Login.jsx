import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Error from "../../component/Error";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/actions/authAction";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Fill it, please"),
  password: Yup.string().min(8, "Minimum 8 chara").required("Fill it, please"),
});
function Login() {
  const [errorBE, setErrorBE] = React.useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const initialState = {
    username: "",
    password: "",
  };
  const isLoading = useSelector((state) => state.auth.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const resultNya = await dispatch(authLogin(values));
    console.log("result", resultNya);
    if (resultNya.status === "Fail") {
      setErrorBE(resultNya);
    }
    if (resultNya.status === "Success") return navigate("/overview");
  };
  console.log(errorBE);
  return (
    <div className="antialiased h-screen w-screen">
      <div className="flex h-full w-full">
        <div className="left col-span-2 bg-gray-800 h-full w-full"></div>
        <div className="right w-3/4 flex justify-center pt-7 ">
          <div className="top absolute pt-8 flex justify-between mx-auto items-center ">
            <h1 className="font-bold text-2xl pr-64">Logo</h1>
            <h5 className="text-gray-500 cursor-default ">
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </span>
            </h5>
          </div>
          <div className="flex flex-col justify-center w-full mt-1 sm:mt-5 ml-24">
            <div className="ml-10 mb-10">
              <h1 className="font-extrabold text-5xl mb-4">Sign In</h1>
              <h1 className="font-bold text-2xl">Welcome Back!</h1>
              <h1 className="font-bold text-2xl">{errorBE?.messege}</h1>
            </div>
            <Formik
              initialValues={initialState}
              validationSchema={LoginSchema}
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
                  className="flex flex-col bg-modal-2 py-5 px-10 rounded mt-1"
                >
                  <label className="font-bold text-lg pb-2" htmlFor="email">
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
                    required
                    className="py-5 px-4 w-8/12 rounded-xl border border-solid border-green-800 text-gray-000 placeholder-gray-000 font-semibold"
                  />
                  {errors.username && touched.username && (
                    <Error>{errors.username}</Error>
                  )}
                  <label
                    className="font-bold text-lg mt-7 pb-2"
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
                    required
                    className="py-5 px-4 rounded-xl w-8/12 border border-solid border-green-800 text-gray-000 placeholder-gray-000 font-semibold"
                  />
                  {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                  )}

                  <button
                    type="submit"
                    className="bg-gray-800 mt-11 w-5/12 text-white font-bold tracking-wider py-5 px-4 rounded-xl cursor-pointer  transition-all hover:bg-gray-900"
                  >
                    Sign In
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

export default Login;
