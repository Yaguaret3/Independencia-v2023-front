import SockJS from "sockjs-client";
import {over} from "stompjs";

const useSocket = ({channel, fetchData}) => {

    const socket = new SockJS('http://localhost:8085/ws');
    const stompClient = over(socket);

    const conectarWS = async () => {
        stompClient.connect({}, function (frame) {
            console.log(channel)
            stompClient.subscribe(channel, async function (valorFinal) {
                await fetchData();
            });
            stompClient.subscribe('/actualizar-todos', async function (valorFinal) {
                await fetchData();
            });
        });
    }


    const disparoControl = () =>{
        stompClient.send('/actualizar-control', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoGobernadores = () => {
        stompClient.send('/actualizar-gobernadores', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoCapitanes = () =>{
        stompClient.send('/actualizar-capitanes', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoMercaderes = () =>{
        stompClient.send('/actualizar-mercaderes', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoRevolucionarios = () =>{
        stompClient.send('/actualizar-revolucionarios', {}, JSON.stringify({ 'mensaje': '' }));
    }
    const disparoTodos = () =>{
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

export default useSocket;