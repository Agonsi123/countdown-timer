import React, { useState } from "react";
import TimerDisplay from "./TimerDisplay";
import "./Timer.css";

const TimerInput = () => {
  // CHANGED INITIAL STATE TO AN EMPTY STRING
  const [duration, setDuration] = useState("");

  return (
    <div className="timer">
      <div className="container">
        <div className="timer_container">
          <h1 className="hTag">Countdown Timer</h1>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            placeholder={"Enter time in seconds"}
          />
          <TimerDisplay duration={duration} setDuration={setDuration} />
        </div>
      </div>
    </div>
  );
};
export default TimerInput;
