import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/control/game/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}
const getControlData = async () => {

    return await axios.get('http://localhost:8085/api/control/control-data/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}
const editarCiudad = async ({ciudadId, body}) => {

    return await axios.post('http://localhost:8085/api/control/'+ciudadId+'/edit-city/',
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

    return await axios.post('http://localhost:8085/api/control/'+cityId+'/remove-building?buildingId='+buildingId,
        {},
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const addBuilding = async ({cityId, buildingType}) => {

    debugger
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
const removeCongress = async({congressId}) => {
    return await axios.delete('http://localhost:8085/api/control/'+congressId+'/remove-congress',
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const updateCongress = async({congressId, presidente, plata, milicia}) => {

    const body = {
        presidente:presidente.playerId,
        plata:+plata,
        milicia:+milicia
    }

    return await axios.patch('http://localhost:8085/api/control/'+congressId+'/update-congress',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const createNewCongress = async({presidente, plata, milicia, diputados, sede}) => {

    const body = {
        presidenteId:presidente,
        plata:plata,
        milicia:milicia,
        diputadosIds:diputados,
        sedeId:sede
    }

    return await axios.post('http://localhost:8085/api/control/create-new-congress',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const moveToCongress = async({playerId, congresoId}) => {

    const body = {
        revolucionarioId:playerId,
        congresoId:congresoId
    }

    return await axios.post('http://localhost:8085/api/control/move-to-congress',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const removeCard = async({cardId}) => {
    return await axios.delete('http://localhost:8085/api/control/'+cardId+'/remove-card',
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const moveCard = async({cardId, fromId, toId}) => {

    const body = {
        fromId:fromId,
        toId:toId
    }

    return await axios.post('http://localhost:8085/api/control/'+cardId+'/move-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}

const createNewResourceCard = async({playerId, resourceType}) => {

    const body = {
        resourceType:resourceType
    }

    return await axios.post('http://localhost:8085/api/control/'+playerId+'/create-give-resource-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const createNewMarketCard = async({playerId, cityName, level}) => {

    const body = {
        cityName:cityName,
        level:level
    }

    return await axios.post('http://localhost:8085/api/control/'+playerId+'/create-give-market-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const createNewRepresentationCard = async({playerId, cityName, cityId}) => {

    const body = {
        cityName:cityName,
        cityId:cityId
    }

    return await axios.post('http://localhost:8085/api/control/'+playerId+'/create-give-representation-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const createNewExtraCard = async({playerId, nombre, descripcion, bonificacion}) => {

    const body = {
        nombre:nombre,
        descripcion:descripcion,
        bonificacion:bonificacion
    }

    return await axios.post('http://localhost:8085/api/control/'+playerId+'/create-give-extra-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const moveCamp = async({playerId, gameSubregionId}) => {
    const body = {
        capitanId:playerId,
        gameSubregionId:gameSubregionId
    }

    return await axios.post('http://localhost:8085/api/control/move-camp',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const terminarFase = async() => {
    const body = {};

    return await axios.post('http://localhost:8085/api/control/conclude-phase',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const createBattle = async({capitanes, subregionId}) => {
    const body = {
        combatientes:capitanes.map(c => {
            return {
                id: c.id,
                ataque: c.ataca
            }
        }),
        gameSubRegionId:subregionId
    };

    return await axios.post('http://localhost:8085/api/control/create-battle',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
export default {
    getGameData,
    getControlData,
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
    createNewArmy,
    removeCongress,
    updateCongress,
    createNewCongress,
    removeCard,
    moveCard,
    createNewResourceCard,
    createNewMarketCard,
    createNewRepresentationCard,
    createNewExtraCard,
    moveCamp,
    terminarFase,
    moveToCongress,
    createBattle
 }