import React, {useContext, useEffect} from "react";
import BarraSuperior from "./components/BarraSuperior.jsx";
import BarraInferior from "./components/BarraInferior.jsx";
import Cuerpo from "./components/Cuerpo.jsx";
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";
import {SettingsContext} from "./Context.jsx";
import service from "./Service.js";


const Settings = () => {

    const {setGames, setUsers, setStompClient, setCities} = useContext(SettingsContext);

    const fetchData = async () => {
        const games = await service.getGames();
        const users = await service.getUsers();
        const cities = await service.getCities();
        setGames(games.data);
        setUsers(users.data);
        setCities(cities.data);
    }

    const {conectarWS} = useWebSocket({
        channel: '/actualizar-settings',
        fetchData: fetchData
    })

    useEffect(() => {

        const baseURL = import.meta.env.VITE_BACKEND_URL_WS;
        const socket = new SockJS(baseURL);
        const stompClient = over(socket);
        setStompClient(stompClient);

        fetchData();
        conectarWS({stompClient: stompClient});

    }, []);

    return (

        <>
            <div>
                <BarraSuperior/>
            </div>
            <div>
                <Cuerpo/>
            </div>
            <div>
                <BarraInferior/>
            </div>
        </>
    );
}
export default Settings;