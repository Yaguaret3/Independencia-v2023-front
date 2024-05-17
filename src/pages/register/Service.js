import {axiosLoginInstance} from '../../axios/axiosInstances.jsx';

const register = async (props) => {
    return await axiosLoginInstance.post('/auth/register', props);
}
export default register;