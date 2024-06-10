import React, { useEffect, useState } from "react";
import TimerControls from "./TimerControls";

const TimerDisplay = ({ duration, setDuration }) => {
  const [timeLeft, setTimeLeft] = useState(0); // SET THIS TO 0 INITIALLY
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // CHNAGED UP THIS USE EFFECT
  useEffect(() => {
    const initialTimeLeft = parseInt(duration);
    if (!isNaN(initialTimeLeft) && initialTimeLeft >= 0) {
      setTimeLeft(initialTimeLeft);
    }
  }, [duration]);

  const startTimer = () => {
    // ADDED THIS -- EXPLAINATION: Ensure the timer only starts if it's not already running and timeLeft is greater than 0
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      // I CLEARED THE INPUT HERE
      setDuration("");
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(newIntervalId);
            setIsRunning(false);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const pauseTimer = () => {
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimeLeft(0);
  };

  return (
    <div className="timer-container">
      <p className="pTag">Time Left: {timeLeft} seconds</p>
      <TimerControls
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />
    </div>
  );
};

export default TimerDisplay;
