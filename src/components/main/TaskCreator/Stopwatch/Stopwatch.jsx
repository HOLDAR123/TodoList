import React, { useState, useEffect } from "react";
import s from './Stopwatch.module.scss';
import StartIcon from '../../../../assets/images/Start.svg';
import StopIcon from '../../../../assets/images/stop.svg';

function formatTime(time) {
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning); 
  };

  return (
    <div className={s.Stopwatch}>
      <div className={s.iconWrapper}>
        <button onClick={handleStartStop}>
          {isRunning ? <img src={StopIcon} alt="Stop" /> : <img src={StartIcon} alt="Start" />}
        </button>
      </div>
      <div className={s.time}>{formatTime(seconds)}</div>
    </div>
  );
}

export default Stopwatch;
