import axios from "./axiosClient";

export function register(values) {
  return axios.post("/register", values);
}


export function login(values) {
  return axios.post("/login", values);
}

export function authme() {
  return axios.get("/authme");
}

export function getDetail() {
  let id = localStorage.getItem("id");
  return axios.get(`/profile/petugas/${id}`);
}