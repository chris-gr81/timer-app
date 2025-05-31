import { useEffect, useRef, useState } from "react";

export function useCountdownPanel(initialTime: number) {
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number>(-1);
  const tickRate = 0.04; //
  const intervalRate = tickRate * 1000;

  // start
  const start = () => {
    if (!isRunning) setIsRunning(true);
  };

  // pause
  const pause = () => {
    setIsRunning(false);
  };

  // reset
  const reset = () => {
    setIsRunning(false);
    setCurrentTime(initialTime);
  };

  // Countdown-Timer
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setCurrentTime((previous) => {
        if (previous <= tickRate) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return parseFloat((previous - tickRate).toFixed(3));
      });
    }, intervalRate);

    // killing old intervals
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = -1;
    };
  }, [isRunning]);

  // updating by changing input-value
  useEffect(() => {
    setCurrentTime(initialTime);
  }, [initialTime]);

  return { currentTime, start, pause, reset, isRunning };
}
