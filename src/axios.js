import axios from axios;
const Base_URL = "http://localhost:5014/api/v1";


const axioInstanse = axios.create();

axioInstanse.defalut.baseURL = Base_URL;
axioInstanse.defalut.withCredentials = true;


export default axioInstanse;