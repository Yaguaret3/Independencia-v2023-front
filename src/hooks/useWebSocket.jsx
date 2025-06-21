import {Bounce, toast} from "react-toastify";

const useWebSocket = ({channel, fetchData}) => {


    const conectarWS = ({stompClient}) => {

        stompClient.connect(
            {
                Authorization: 'Bearer ' + localStorage.getItem('independencia-token')
            },
            function (frame) {
                stompClient.subscribe(channel, function (valorFinal) {
                    fetchData();
                });
                stompClient.subscribe('/actualizar-todos', function (valorFinal) {
                    fetchData();
                });
            },
            function (error) {

                const longError = error.headers.message;
                const errorSplit = longError.split('\\c');
                const errorToShow = errorSplit[1];

                toast.error(errorToShow, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }
        );
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
    const disparoSettings = ({stompClient}) =>{
        stompClient.send('/actualizar-settings', {}, JSON.stringify({ 'mensaje': "" }));
    }



    return {
        conectarWS,
        disparoControl,
        disparoGobernadores,
        disparoCapitanes,
        disparoMercaderes,
        disparoRevolucionarios,
        disparoTodos,
        disparoSettings
    };
};

export default useWebSocket;