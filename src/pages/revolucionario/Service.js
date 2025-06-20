import {axiosCommonInstance,axiosGetInstance} from '../../axios/axiosInstances.jsx';

const getGameData = async () => {

    return await axiosGetInstance.get('/revolucion/game/');
}

const getPlayerData = async () => {

    return await axiosGetInstance.get('/revolucion/');
}

const getCongresosData = async () => {

    return await axiosGetInstance.get('/revolucion/congresos/');
}

const propose = async ({proposal}) => {

    const body = {
        proposal:proposal
    }

    return await axiosCommonInstance.post('/revolucion/propose', body);
}
const vote = async ({votationId, voteType}) => {

    const body = {
        votacion:votationId,
        voteType:voteType
    }

    return await axiosCommonInstance.post('/revolucion/vote', body);
}
const closeVotation = async () => {

    return await axiosCommonInstance.post('/revolucion/close-votation', {})
}

export default {
    getGameData,
    getPlayerData,
    getCongresosData,
    propose,
    vote,
    closeVotation
}