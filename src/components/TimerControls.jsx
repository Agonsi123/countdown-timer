import React from 'react';

const TimerControls = (props) =>{
    
    return(
        <div className='timer-container'>
            <button className='settime' onClick={props.onStart}>Start</button>
            <button className='pausetime' onClick={props.onPause}>Pause</button>
            <button className='resettime' onClick={props.onReset}>Reset</button>
        </div>
    );
}
export default TimerControls