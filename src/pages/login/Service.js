import {axiosLoginInstance} from '../../axios/axiosInstances.jsx';

const login = async (props) => {
    return await axiosLoginInstance.post('auth/login', props)
}

const renewPass = async ({email, oldPass, newPass}) => {
    const body = {
        email:email,
        oldPass:oldPass,
        newPass:newPass
    }
    return await axiosLoginInstance.post('auth/renew-pass', body);
}

export default {
    login,
    renewPass
};