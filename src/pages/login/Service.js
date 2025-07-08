import {axiosLoginInstance} from '../../axios/axiosInstances.jsx';

const login = async (props) => {
    return await axiosLoginInstance.post('auth/login', props)
}


export default {
    login
};