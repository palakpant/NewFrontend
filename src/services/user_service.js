import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/test/";
const LOC_URL="http://localhost:8080/api/test/user/seatleftbydateslot/";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getBangaloreDetail =(dateOfTransaction,slotTime) =>{
  //return axios.get(API_URL + "user", { headers: authHeader() });
  return axios.post(LOC_URL + "Blr", {
    dateOfTransaction,
    slotTime
  });
};
  //return axios.get(LOC_URL + "Blr", {headers: authHeader() });
 // return axios.get(API_URL + "admin", { headers: authHeader() });

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const UserService = {
  getPublicContent,
  getUserBoard,
  getBangaloreDetail,
  getAdminBoard
  
};
export default UserService;