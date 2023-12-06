import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/control/game/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

export default {
    getGameData,
 }