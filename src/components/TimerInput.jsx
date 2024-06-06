import React, {useState} from 'react'
import TimerDisplay from './TimerDisplay';
import  './Timer.css';

const TimerInput = () =>{
    const [duration, setDuration] = useState(0);

    return(
        <div className='timer'>
            <div className='container'>
                <div className='timer_container'>
                    <h1 className='hTag'>Countdown Timer</h1>
                    <input type="number" 
                    value={duration}
                    onChange={(e) =>setDuration(parseInt(e.target.value))
                    }placeholder= {'Enter time in seconds'} />
                    <TimerDisplay duration={duration} />
                </div>
            </div>
        </div>
    )
}
export default TimerInput