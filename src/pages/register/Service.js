import axios from "axios";

const register = async (props) => {
    console.log(props)
    return await axios.post('http://localhost:8085/api/auth/register', props);
}
export default register;