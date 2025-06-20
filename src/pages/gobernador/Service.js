import {axiosCommonInstance, axiosGetInstance} from '../../axios/axiosInstances.jsx';

const getPlayerData = async () => {

    return await axiosGetInstance.get('/ciudad');
}
const getGameData = async () => {

    return await axiosGetInstance.get('/ciudad/game/');
}

const cambiarImpuestos = async ({aumentar, disminuir}) => {

    const body = {
        aumentar:aumentar,
        disminuir:disminuir
    }

    return await axiosCommonInstance.post('/ciudad/change-taxes', body);
    
}

const entregarMercado = async ({ idJugadorDestino, idMarketCard }) => {

    const body = {
        idJugadorDestino: idJugadorDestino,
        idMarketCard: idMarketCard
    }

    return await axiosCommonInstance.post('/ciudad/sell-marketplace', body);
}
const crearEdificio = async ({priceId, plata, puntajeComercial, disciplina, resourcesIds}) => {

    const body = {
        priceId: priceId,
        payment: {
            plata: plata,
            puntajeComercial: puntajeComercial,
            disciplina: disciplina,
            resourcesIds: resourcesIds
        }
    }

    return await axiosCommonInstance.post('/ciudad/build-new-building', body);
}
const mejorarMercado = async ({plata, puntajeComercial, disciplina, resourcesIds}) => {

    const body = {
        plata: plata,
        puntajeComercial: puntajeComercial,
        disciplina: disciplina,
        resourcesIds: resourcesIds
    }

    return await axiosCommonInstance.post('/ciudad/upgrade-marketplace', body);
}
const elegirDiputado = async ({idJugadorDestino, idRepresentationCard}) => {

    const body = {
        idJugadorDestino: idJugadorDestino,
        idRepresentationCard: idRepresentationCard
    }

    return await axiosCommonInstance.post('/ciudad/give-representation-card', body);
}
const reclutarMilicia = async ({plata, puntajeComercial, disciplina, resourcesIds}) => {

    const body = {
        plata: plata,
        puntajeComercial: puntajeComercial,
        disciplina: disciplina,
        resourcesIds: resourcesIds
    }

    return await axiosCommonInstance.post('/ciudad/recruit-militia', body);
}
const asignarMilicia = async ({idJugadorDestino, cantidadMilicias}) => {

    const body = {
        idJugadorDestino:idJugadorDestino,
        cantidadMilicias:cantidadMilicias
    }

    return await axiosCommonInstance.post('/ciudad/assign-militia', body);
}

export default {
    getPlayerData,
    getGameData,
    cambiarImpuestos,
    entregarMercado,
    crearEdificio,
    mejorarMercado,
    elegirDiputado,
    reclutarMilicia,
    asignarMilicia
};