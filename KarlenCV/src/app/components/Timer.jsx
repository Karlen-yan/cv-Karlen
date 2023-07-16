'use client'
import { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours + 1);
    }
  }, [minutes]);

  return (
    <div className='timer__container'>
      <div className='timer__item'>
      <h1>{hours}:{minutes}:{seconds}</h1>
      </div>
    </div>
  );
};

export default Timer;
