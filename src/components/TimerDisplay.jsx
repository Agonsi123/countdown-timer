import React, {useEffect, useState} from 'react'
import TimerControls from './TimerControls';

const TimerDisplay = (props) =>{
    const [timeLeft, setTimeLeft] = useState(() => {
        const initialTimeLeft = parseInt(props.duration);
        return isNaN(initialTimeLeft) ? 0 : initialTimeLeft;
    });
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setTimeLeft(props.duration);
    }, [props.duration]);

    const startTimer = () =>{
        if (!isRunning && props.duration > 0) {
            const newIntervalId = setInterval(() =>
                setTimeLeft((prevTimeLeft) =>{
                    if (prevTimeLeft <= 0){
                        clearInterval
                        (newIntervalId)
                        return 0;
                    }else{
                        return prevTimeLeft - 1;
                    }
                }), 1000);
            setIntervalId(newIntervalId); 
        };
    };

    useEffect(() =>{
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId, setIsRunning, setTimeLeft]);

    const pauseTimer = () => {
        setIsRunning(false);
        clearInterval(intervalId);
    };

    const resetTimer = () => {
        if (isRunning) {
            pauseTimer();
        }
        setTimeLeft(0);
    };


    return(
        <div className='timer-container'>        
            <p className='pTag'>Time Left: {timeLeft} seconds</p>
            <TimerControls 
                onStart={startTimer}
                onPause={pauseTimer}
                onReset={resetTimer}
            />                  
        </div>
    );
}
export default TimerDisplay
