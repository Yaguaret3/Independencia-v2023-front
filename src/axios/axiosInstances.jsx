import axios from "axios";
import {Bounce, toast} from "react-toastify";


const token = localStorage.getItem('independencia-token');

const axiosCommonInstance = axios.create({
    baseURL: "http://localhost:8085/api/",
    headers: {
        Authorization: 'Bearer ' + token
    }
});

axiosCommonInstance.interceptors.response.use(
    responseBody => {
        return responseBody;
    },
    error => {

        toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }
)

const axiosGetInstance = axios.create({
    baseURL: "http://localhost:8085/api/",
    headers: {
        Authorization: 'Bearer ' + token
    }
});

axiosGetInstance.interceptors.response.use(
    responseBody => {
        return responseBody;
    },
    error => {
        toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }
)

const axiosControlInstance = axios.create({
    baseURL: "http://localhost:8085/api/",
    headers: {
        Authorization: 'Bearer ' + token
    }
});

axiosControlInstance.interceptors.response.use(
    responseBody => {
        toast.success(responseBody.data, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        return responseBody;
    },
    error => {
        toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }
)
const axiosLoginInstance = axios.create({
    baseURL: "http://localhost:8085/api/"
});

axiosLoginInstance.interceptors.response.use(
    responseBody => {
        return responseBody;
    },
    error => {

        toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }
)

export {axiosCommonInstance, axiosGetInstance, axiosControlInstance, axiosLoginInstance};