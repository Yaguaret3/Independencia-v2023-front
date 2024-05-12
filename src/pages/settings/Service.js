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
        rol:rol
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


export default {
    getGames,
    getUsers,
    getCities,
    removeRole,
    createGame,
    deactivateGame,
    deleteGame,
    addRole,
    assignCity
}