import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/militares/game/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const getPlayerData = async () => {

    return await axios.get('http://localhost:8085/api/militares/',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}
const moverCampamento = async ({cardId, regionToId}) => {

    const body = {
        cardId:cardId,
        regionToId: regionToId
    }

    return await axios.post('http://localhost:8085/api/militares/move',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

}
const playActionCard = async ({cardId, subregionId}) => {

    const body = {
        cardId:cardId,
        subregionId: subregionId
    }

    return await axios.post('http://localhost:8085/api/militares/play-action-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const comprarActionCard = async ({cardTypeId, plata, puntajeComercial, disciplina, resourcesIds}) => {

    const body = {
        cardTypeId:cardTypeId,
        payment: {
            plata: plata,
            puntajeComercial: puntajeComercial,
            disciplina: disciplina,
            resourcesIds: resourcesIds
        }
    }

    return await axios.post('http://localhost:8085/api/militares/buy-action-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const comprarBattleCard = async ({cardTypeId, plata, puntajeComercial, disciplina, resourcesIds}) => {

    const body = {
        cardTypeId:cardTypeId,
        payment: {
            plata: plata,
            puntajeComercial: puntajeComercial,
            disciplina: disciplina,
            resourcesIds: resourcesIds
        }
    }

    return await axios.post('http://localhost:8085/api/militares/buy-action-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const assignMilitia = async ({militia, battleId}) => {

    const body = {
        milicia:militia,
        battleId:battleId
    }

    return await axios.post('http://localhost:8085/api/militares/assign-militia-battle',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const playBattleCard = async ({cardId, battleId}) => {

    const body = {
        cardId:cardId,
        battleId:battleId
    }

    return await axios.post('http://localhost:8085/api/militares/play-battle-cards',
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
    moverCampamento,
    playActionCard,
    comprarActionCard,
    comprarBattleCard,
    assignMilitia,
    playBattleCard
}