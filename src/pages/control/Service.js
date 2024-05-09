import {axiosControlInstance} from '../../axios/axiosInstances.jsx';

const getGameData = async () => {

    return await axiosControlInstance.get('control/game/');
}
const getControlData = async () => {

    return await axiosControlInstance.get('control/control-data/');
}
const editarCiudad = async ({ciudadId, body}) => {

    return await axiosControlInstance('control/'+ciudadId+'/edit-city/', body);
}
const assignDiputado = async ({revolucionariodId, cityId}) => {

    const body = {
        diputadoId:revolucionariodId
    }
    return await axiosControlInstance.post('control/'+cityId+'/assign-diputado', body);
}
const removeBuilding = async ({cityId, buildingId}) => {

    return await axiosControlInstance.post('control/'+cityId+'/remove-building?buildingId='+buildingId, {});
}
const addBuilding = async ({cityId, buildingType}) => {

    debugger
    const body = {
        buildingType:buildingType
    }

    return await axiosControlInstance.post('control/'+cityId+'/add-building', body);
}
const updatePrices = async ({priceId, body}) => {
    return await axiosControlInstance.post('control/'+priceId+'/update-price', body);
}
const updatePlata = async ({value, gobernadorId}) => {
    const body = {
        newValue:value
    }

    return await axiosControlInstance.post('control/'+gobernadorId+'/update-plata', body);
}
const updateVote = async ({voteId, newValue}) => {
    const body = {
        voteType:newValue
    }

    return await axiosControlInstance.post('control/'+voteId+'/update-vote', body);
}
const updateReserve = async ({playerId, value}) => {
        const body = {
        newValue:value
    }

    return await axiosControlInstance.post('control/'+playerId+'/assign-reserve', body);
}
const deleteArmy = async ({armyId}) => {

    return await axiosControlInstance.delete('control/'+armyId);
}
const createNewArmy = async ({capitanId, subregionId}) => {
    const body = {
        gameSubRegionId:subregionId,
        capitanId:capitanId
    }

    return await axiosControlInstance.post('control/new-army', body);
}
const removeCongress = async({congressId}) => {
    return await axiosControlInstance.delete('control/'+congressId+'/remove-congress');
}
const updateCongress = async({congressId, presidente, plata, milicia}) => {

    const body = {
        presidente:presidente.playerId,
        plata:+plata,
        milicia:+milicia
    }

    return await axiosControlInstance.patch('control/'+congressId+'/update-congress', body);
}
const createNewCongress = async({presidente, plata, milicia, diputados, sede}) => {

    const body = {
        presidenteId:presidente,
        plata:plata,
        milicia:milicia,
        diputadosIds:diputados,
        sedeId:sede
    }

    return await axiosControlInstance.post('control/create-new-congress', body);
}
const moveToCongress = async({playerId, congresoId}) => {

    const body = {
        revolucionarioId:playerId,
        congresoId:congresoId
    }

    return await axiosControlInstance.post('control/move-to-congress', body);
}
const removeCard = async({cardId}) => {
    return await axiosControlInstance.delete('control/'+cardId+'/remove-card');
}
const moveCard = async({cardId, fromId, toId}) => {

    const body = {
        fromId:fromId,
        toId:toId
    }

    return await axiosControlInstance.post('control/'+cardId+'/move-card', body);
}

const createNewResourceCard = async({playerId, resourceType}) => {

    const body = {
        resourceType:resourceType
    }

    return await axiosControlInstance.post('control/'+playerId+'/create-give-resource-card', body);
}
const createNewMarketCard = async({playerId, cityName, level}) => {

    const body = {
        cityName:cityName,
        level:level
    }

    return await axiosControlInstance.post('control/'+playerId+'/create-give-market-card', body);
}
const createNewRepresentationCard = async({playerId, cityName, cityId}) => {

    const body = {
        cityName:cityName,
        cityId:cityId
    }

    return await axiosControlInstance.post('control/'+playerId+'/create-give-representation-card', body);
}
const createNewExtraCard = async({playerId, nombre, descripcion, bonificacion}) => {

    const body = {
        nombre:nombre,
        descripcion:descripcion,
        bonificacion:bonificacion
    }

    return await axiosControlInstance.post('control/'+playerId+'/create-give-extra-card', body);
}
const createNewActionCard = async({playerId, action}) => {
    const body = {
        actionType:action
    }

    return await axiosControlInstance.post('control/'+playerId+'/create-give-action-card', body);
}
const createNewBattleCard = async({playerId, battleType}) => {
    const body = {
        battleType:battleType
    }

    return await axiosControlInstance.post('control/'+playerId+'/create-give-battle-card', body);
}
const moveCamp = async({playerId, gameSubregionId}) => {
    const body = {
        capitanId:playerId,
        gameSubregionId:gameSubregionId
    }

    return await axiosControlInstance.post('control/move-camp', body);
}
const concludePhase = async() => {
    const body = {};

    return await axiosControlInstance.post('control/conclude-phase',
        body);
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

    return await axiosControlInstance.post('control/create-battle', body);
}
const updateRoute = async({route}) => {
    const body = {
        finalValue:route.finalValue,
        comentario:route.comentario
    };

    return await axiosControlInstance.post('control/'+route.id+'/update-route', body);
}
const assignRandomValues = async({battleId}) => {
    const body = {};

    return await axiosControlInstance.post('control/'+battleId+'/assign-random-values-battle', body);
}
const solveBattle = async({battleId, resultados}) => {
    const body = {
        battleId:battleId,
        resultados:resultados
    };

    return await axiosControlInstance.post('control/solve-battle', body);
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
    createNewActionCard,
    createNewBattleCard,
    moveCamp,
    concludePhase,
    moveToCongress,
    createBattle,
    updateRoute,
    assignRandomValues,
    solveBattle
 }