import axios from "axios";

const login = async (props) => {
    return await axios.post('http://localhost:8085/api/auth/login', props)
}
export default login;