import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/comercio/get-game-data',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const getPlayerData = async () => {

    return await axios.get('http://localhost:8085/api/comercio',{
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const buyResources = async({priceId, puntajeAPagar}) => {

    const body = {
        payment: {
            puntajeComercial:puntajeAPagar
        },
        priceId: priceId
    }

    return await axios.post('http://localhost:8085/api/comercio/buy-resources',
        body, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const giveResources = async ({idJugadorDestino, idResourceCard}) => {

    const body = {
        idJugadorDestino: idJugadorDestino,
        resourceIds: [idResourceCard]
    }

    return await axios.post('http://localhost:8085/api/comercio/give-resources',
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
    buyResources,
    giveResources
}