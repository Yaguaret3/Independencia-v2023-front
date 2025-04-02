import axios from "axios";
import {Bounce, toast} from "react-toastify";


const token = localStorage.getItem('independencia-token');
const baseURL = import.meta.env.VITE_BACKEND_URL;
const apiURL = baseURL+'/api/';

const axiosCommonInstance = axios.create({
    baseURL: apiURL,
    headers: {
        Authorization: 'Bearer ' + token
    }
});

axiosCommonInstance.interceptors.response.use(
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

const axiosGetInstance = axios.create({
    baseURL: apiURL,
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
    baseURL: apiURL,
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
    baseURL: apiURL
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