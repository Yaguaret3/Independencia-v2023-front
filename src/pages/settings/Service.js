import {axiosControlInstance} from '../../axios/axiosInstances.jsx';

const getGames = async () => {
    return await axiosControlInstance.get('/settings/games');

}
const getUsers = async () => {
    return await axiosControlInstance.get('/settings/users');
}
const getCities = async () => {
    return await axiosControlInstance.get('/settings/cities');
}
const removeRole = async ({id, rol}) => {
    const body = {
        id:id,
        role:rol
    }
    return await axiosControlInstance.post('/settings/remove-role', body);
}
const createGame = async ({name}) => {
    const body = {
        nombre:name
    }
    return await axiosControlInstance.post('/settings/create-game', body);
}
const deactivateGame = async ({id}) => {
    return await axiosControlInstance.post('/settings/'+id+'/deactivate', {});
}
const deleteGame = async ({id}) => {
    return await axiosControlInstance.delete('/settings/'+id+'/');
}
const addRole = async ({id, role}) => {
    const body ={
        id:id,
        role:role
    }
    return await axiosControlInstance.post('/settings/add-role', body);
}
const assignCity = async ({playerId, cityId}) => {
    const body = {
        playerId:playerId,
        cityId:cityId
    }
    return await axiosControlInstance.post('/settings/assign-city', body);
}
const updateUsername = async ({id, username}) => {
    const body = {
        id:id,
        username:username
    }
    return await axiosControlInstance.post('/settings/update-username', body);
}
const forceConcludePhase = async () => {
    return await axiosControlInstance.post('/settings/force-conclude-phase');
}


export default {
    getGames,
    getUsers,
    getCities,
    removeRole,
    createGame,
    deactivateGame,
    deleteGame,
    addRole,
    assignCity,
    updateUsername,
    forceConcludePhase
}