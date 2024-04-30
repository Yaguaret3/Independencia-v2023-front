import SockJS from "sockjs-client";
import {over} from "stompjs";

const useWebSocket = ({channel, fetchData}) => {


    const conectarWS = ({stompClient}) => {

        stompClient.connect({}, function (frame) {
            stompClient.subscribe(channel, function (valorFinal) {
                fetchData();
            });
            stompClient.subscribe('/actualizar-todos', function (valorFinal) {
                console.log('Entra y...')
                fetchData();
            });
        });
    }

    const disparoControl = ({stompClient}) =>{
        stompClient.send('/actualizar-control', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoGobernadores = ({stompClient}) => {
        stompClient.send('/actualizar-gobernadores', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoCapitanes = ({stompClient}) =>{
        stompClient.send('/actualizar-capitanes', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoMercaderes = ({stompClient}) =>{
        stompClient.send('/actualizar-mercaderes', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoRevolucionarios = ({stompClient}) =>{
        stompClient.send('/actualizar-revolucionarios', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoTodos = ({stompClient}) =>{
        stompClient.send('/actualizar-todos', {}, JSON.stringify({ 'mensaje': "" }));
    }



    return {
        conectarWS,
        disparoControl,
        disparoGobernadores,
        disparoCapitanes,
        disparoMercaderes,
        disparoRevolucionarios,
        disparoTodos
    };
};

export default useWebSocket;