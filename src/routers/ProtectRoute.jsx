import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingScreen from "react-loading-screen";
import { authMe } from "../redux/actions/authAction";
export default function PrivateRoute({ children }) {
  const navigate = useNavigate()
  let auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  let token = localStorage.getItem("token");
  const getAuthMe = async () => {
    const response = await dispatch(authMe());
    console.log(response.status);
    if (response.status === "Success") {
      auth = true;
    }

    console.log(auth);
  };

  React.useEffect(() => {
    if (!auth) {
      if (token !== undefined) {
        getAuthMe();
      }
    }
  }, [auth]);

  if (isLoading) {
    return (
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#0D7377"
      ></LoadingScreen>
    );
  } else {
    return token !== undefined ? children : <Navigate to="/login" />;
  }
}
//
