import {axiosControlInstance} from '../../axios/axiosInstances.jsx';

const getGames = async () => {
    return await axiosControlInstance.get('/setting/games');

}
const getUsers = async () => {
    return await axiosControlInstance.get('/setting/users');
}
const getCities = async () => {
    return await axiosControlInstance.get('/setting/cities');
}
const removeRole = async ({id, rol}) => {
    const body = {
        id:id,
        rol:rol
    }
    return await axiosControlInstance.post('/setting/remove-role', body);
}
const createGame = async () => {
    return await axiosControlInstance.post('/setting/create-game', {});
}
const deactivateGame = async ({id}) => {
    return await axiosControlInstance.post('/setting/'+id+'/deactivate', {});
}
const deleteGame = async ({id}) => {
    return await axiosControlInstance.delete('/setting/'+id+'/');
}
const addRole = async ({id, role}) => {
    const body ={
        id:id,
        role:role
    }
    return await axiosControlInstance.post('/setting/add-role', body);
}
const assignCity = async ({playerId, cityId}) => {
    const body = {
        playerId:playerId,
        cityId:cityId
    }
    return await axiosControlInstance.post('/setting/assign-city', body);
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