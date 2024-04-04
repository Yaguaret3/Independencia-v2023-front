import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/control/game/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}
const editarCiudad = async ({gobernadorId, body}) => {

    return await axios.post('http://localhost:8085/api/control/'+gobernadorId+'/edit-city/',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const assignDiputado = async ({revolucionariodId, cityId}) => {

    const body = {
        diputadoId:revolucionariodId
    }
    return await axios.post('http://localhost:8085/api/control/'+cityId+'/assign-diputado',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const removeBuilding = async ({cityId, buildingId}) => {

    return await axios.post('http://localhost:8085/api/control/'+cityId+'/remove-building?buildingId:'+buildingId,
        {},
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
    return await axios.post('http://localhost:8085/api/control/'+priceId+'/update-price',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const updatePlata = async ({value, gobernadorId}) => {
    const body = {
        newValue:value
    }

    return await axios.post('http://localhost:8085/api/control/'+gobernadorId+'/update-plata',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const updateVote = async ({voteId, newValue}) => {
    const body = {
        voteType:newValue
    }

    return await axios.post('http://localhost:8085/api/control/'+voteId+'/update-vote',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const updateReserve = async ({playerId, value}) => {
    debugger
    const body = {
        newValue:value
    }

    return await axios.post('http://localhost:8085/api/control/'+playerId+'/assign-reserve',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const assignMilitiaToArmy = async ({armyId, milicias}) => {
    const body = {
        newValue:milicias
    }

    return await axios.post('http://localhost:8085/api/control/'+armyId+'/assign-militia',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const deleteArmy = async ({armyId}) => {

    return await axios.delete('http://localhost:8085/api/control/'+armyId,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const createNewArmy = async ({capitanId, subregionId, milicias}) => {
    const body = {
        milicias:milicias,
        gameSubRegionId:subregionId,
        capitanId:capitanId
    }

    return await axios.post('http://localhost:8085/api/control/new-army',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}

export default {
    getGameData,
    editarCiudad,
    assignDiputado,
    removeBuilding,
    addBuilding,
    updatePrices,
    updatePlata,
    updateVote,
    updateReserve,
    assignMilitiaToArmy,
    deleteArmy,
    createNewArmy
 }