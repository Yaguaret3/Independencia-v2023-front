import {useEffect, useRef, useState} from "react";

const useTimer = ({futureDate}) => {

    const [endOfTurn, setEndOfTurn] = useState({minutes: '00', seconds: '00'});
    const audioRef = useRef(null);
    if (!audioRef.current) {
        audioRef.current = new Audio("/sounds/alert.mp3");
        audioRef.current.preload = "auto";
    }

    const calculateTimeLeft = () => {
        let difference = futureDate - new Date();
        let minutes = Math.floor(difference / 1000 / 60);
        let seconds = Math.floor((difference / 1000) % 60);

        let minString = '00';
        let secString = '00';

        if (difference > 0) {
            minString = minutes >= 10 ? minutes : '0' + minutes;
            secString = seconds >= 10 ? seconds : '0' + seconds;
        }
        setEndOfTurn({
            minutes: minString,
            seconds: secString
        });

        if (minutes === 1 && seconds === 0) {
            audioRef.current.play().catch((e) => {
                console.log("Error al reproducir audio: ", e);
                alert("¡Último minuto del turno! Quizás debas activar el sonido de tu navegador para escuchar la alerta.");
            });
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);
        return () => clearInterval(timer);
    }, [futureDate]);

    return {
        minutes: endOfTurn.minutes,
        seconds: endOfTurn.seconds
    }
}

export default useTimer;