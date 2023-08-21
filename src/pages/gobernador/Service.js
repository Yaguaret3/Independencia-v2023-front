import axios from "axios";

const token = localStorage.getItem('independencia-token');

const getPlayerData = async () => {

    return await axios.get('http://localhost:8085/api/ciudad', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}
const getGameData = async () => {

    return await axios.get('http://localhost:8085/api/ciudad/game/', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

const cambiarImpuestos = async ({aumentar, disminuir}) => {

    const body = {
        aumentar:aumentar,
        disminuir:disminuir
    }

    return await axios.post('http://localhost:8085/api/ciudad/change-taxes',
            body,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
    
}

const entregarMercado = async ({ idJugadorDestino, idMarketCard }) => {

    const body = {
        idJugadorDestino: idJugadorDestino,
        idMarketCard: idMarketCard
    }

    return await axios.post('http://localhost:8085/api/ciudad/sell-marketplace',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
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

    return await axios.post('http://localhost:8085/api/ciudad/build-new-building',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const mejorarMercado = async ({plata, puntajeComercial, disciplina, resourcesIds}) => {

    const body = {
        plata: plata,
        puntajeComercial: puntajeComercial,
        disciplina: disciplina,
        resourcesIds: resourcesIds
    }

    return await axios.post('http://localhost:8085/api/ciudad/upgrade-marketplace',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const elegirDiputado = async ({idJugadorDestino, idRepresentationCard}) => {

    const body = {
        idJugadorDestino: idJugadorDestino,
        idRepresentationCard: idRepresentationCard
    }

    return await axios.post('http://localhost:8085/api/ciudad/give-representation-card',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const reclutarMilicia = async ({plata, puntajeComercial, disciplina, resourcesIds}) => {

    const body = {
        plata: plata,
        puntajeComercial: puntajeComercial,
        disciplina: disciplina,
        resourcesIds: resourcesIds
    }

    return await axios.post('http://localhost:8085/api/ciudad/recruit-militia',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}
const asignarMilicia = async ({idJugadorDestino, cantidadMilicias}) => {

    const body = {
        idJugadorDestino:idJugadorDestino,
        cantidadMilicias:cantidadMilicias
    }

    return await axios.post('http://localhost:8085/api/ciudad/assign-militia',
        body,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
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