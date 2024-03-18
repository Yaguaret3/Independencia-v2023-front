import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/control/game/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}
const actualizarMilicia = async ({value, gobernadorId}) => {

    const body = {
        milicia:value
    }

    return await axios.post('http://localhost:8085/api/control/'+gobernadorId+'/assign-reserve/',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const editarCiudad = async ({gobernadorId, body}) => {

    return await axios.patch('http://localhost:8085/api/control/'+gobernadorId+'/edit-city/',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const assignDiputado = async ({revolucionariodId, cityId}) => {

    return await axios.patch('http://localhost:8085/api/control/'+cityId+'/assign-diputado?diputadoId:'+revolucionariodId,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const removeBuilding = async ({cityId, buildingId}) => {

    return await axios.post('http://localhost:8085/api/control/'+cityId+'/remove-building?buildingId:'+buildingId,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const addBuilding = async ({cityId, buildingType}) => {

    const body = {
        buildingType:buildingType
    }

    return await axios.post('http://localhost:8085/api/control/'+cityId+'/add-building',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const updatePrices = async ({priceId, body}) => {
    return await axios.post('http://localhost:8085/api/control/'+priceId+'/update-price'),
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
}

export default {
    getGameData,
    actualizarMilicia,
    editarCiudad,
    assignDiputado,
    removeBuilding,
    addBuilding,
    updatePrices
 }