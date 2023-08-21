import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/revolucion/game/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const getPlayerData = async () => {

    return await axios.get('http://localhost:8085/api/revolucion/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const getCongresosData = async () => {

    return await axios.get('http://localhost:8085/api/revolucion/congresos/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const propose = async ({proposal}) => {

    const body = {
        proposal:proposal
    }

    return await axios.post('http://localhost:8085/api/revolucion/propose',
    body,
    {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}
const vote = async ({votationId, voteType}) => {

    const body = {
        votacion:votationId,
        voteType:voteType
    }

    return await axios.post('http://localhost:8085/api/revolucion/vote',
    body,
    {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

export default {
    getGameData,
    getPlayerData,
    getCongresosData,
    propose,
    vote
}