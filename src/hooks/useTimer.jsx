import {useEffect, useState} from "react";

const useTimer = ({futureDate}) => {

    const [endOfTurn, setEndOfTurn] = useState({minutes:'00', seconds:'00'});
    const [isRunning, setIsRunning] = useState(false);

    const calculateTimeLeft= ()  => {
        let difference = futureDate - new Date();
        let minutes = Math.floor(difference / 1000 / 60);
        let seconds = Math.floor((difference / 1000) % 60);

        let minString = '00';
        let secString = '00';

        if(difference>0){
            minString = minutes >= 10 ? minutes : '0'+minutes;
            secString = seconds >= 10 ? seconds : '0'+seconds;
        }
        setEndOfTurn({minutes:minString,
            seconds: secString});
    }

    useEffect(() => {
        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);
        setIsRunning(true);
        return () => clearInterval(timer);
        }, [futureDate]);

    return {
        minutes:endOfTurn.minutes,
        seconds:endOfTurn.seconds
    }
}

export default useTimer;