import axios from "axios"

const Base_url = "http://localhost:5041/api/v1";

const axiosinstance = axios.create();

axiosinstance.defaults.baseURL = Base_url;
axiosinstance.defaults.withCredentials= true;


export default axiosinstance;