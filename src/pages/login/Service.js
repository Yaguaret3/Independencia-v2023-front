import {axiosCommonInstance} from '../../axios/axiosInstances.jsx';

const login = async (props) => {
    return await axiosCommonInstance.post('auth/login', props)
}
export default login;