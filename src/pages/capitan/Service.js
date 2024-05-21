import {axiosCommonInstance} from '../../axios/axiosInstances.jsx';

const getGameData = async () => {

    return await axiosCommonInstance.get('/militares/game/');
}

const getPlayerData = async () => {

    return await axiosCommonInstance.get('/militares/');
}
const moverCampamento = async ({cardId, regionToId}) => {

    const body = {
        cardId:cardId,
        regionToId: regionToId
    }

    return await axiosCommonInstance.post('/militares/move', body);

}
const playActionCard = async ({cardId, subregionId}) => {

    const body = {
        cardId:cardId,
        subregionId: subregionId
    }

    return await axiosCommonInstance.post('/militares/play-action-card', body);
}
const comprarActionCard = async ({cardTypeId, plata, resourcesIds}) => {

    const body = {
        cardTypeId:cardTypeId,
        payment: {
            plata: plata,
            resourcesIds: resourcesIds
        }
    }

    return await axiosCommonInstance.post('/militares/buy-action-card', body);
}
const comprarBattleCard = async ({cardTypeId, plata, resourcesIds}) => {

    const body = {
        cardTypeId:cardTypeId,
        payment: {
            plata: plata,
            resourcesIds: resourcesIds
        }
    }

    return await axiosCommonInstance.post('/militares/buy-battle-card', body);
}
const assignMilitia = async ({militia, battleId}) => {

    const body = {
        milicia:militia,
        battleId:battleId
    }

    return await axiosCommonInstance.post('/militares/assign-militia-battle', body);
}
const playBattleCard = async ({cardId, battleId}) => {

    const body = {
        cardId:cardId,
        battleId:battleId
    }

    return await axiosCommonInstance.post('/militares/play-battle-cards', body);
}


export default {
    getGameData,
    getPlayerData,
    moverCampamento,
    playActionCard,
    comprarActionCard,
    comprarBattleCard,
    assignMilitia,
    playBattleCard
}