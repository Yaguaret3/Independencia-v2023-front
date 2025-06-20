import {axiosCommonInstance,axiosGetInstance} from '../../axios/axiosInstances.jsx';

const getGameData = async () => {

    return await axiosGetInstance.get('comercio/get-game-data');
}

const getPlayerData = async () => {

    return await axiosGetInstance.get('/comercio');
}

const buyResources = async({priceId, puntajeAPagar}) => {

    const body = {
        payment: {
            puntajeComercial:puntajeAPagar
        },
        priceId: priceId
    }

    return await axiosCommonInstance.post('/comercio/buy-resources', body);
}

const playTradeRoute = async ({subregionsSelected, marketsSelected}) => {

    const body = {
        subregions:subregionsSelected.filter(s => s.id !== undefined).map((s, index) => {

            return {
                position: index + 1,
                id: s.id,
                cityMarketCardId: marketsSelected.find(mr => mr.cityName === s.nombre)?.id
            };
        })
    }

    return await axiosCommonInstance.post('/comercio/play-trade-routes', body);
}

const giveCard = async ({idJugadorDestino, idResourceCard}) => {

    const body = {
        playerToId: idJugadorDestino,
        cardId: idResourceCard
    }

    return await axiosCommonInstance.post('/player/give-card', body);
}

export default {
    getGameData,
    getPlayerData,
    buyResources,
    giveCard,
    playTradeRoute
}