import {axiosCommonInstance} from '../../axios/axiosInstances.jsx';

const register = async (props) => {
    return await axiosCommonInstance.post('/auth/register', props);
}
export default register;