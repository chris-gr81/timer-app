import { useEffect, useRef, useState } from "react";

export function useCountdownPanel(initialTime: number) {
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);

  // start
  const start = () => {
    if (!isRunning) setIsRunning(true);
  };

  // Countdown-Timer
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setCurrentTime((previous) => {
        if (previous <= 0.04) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return parseFloat((previous - 0.04).toFixed(3));
      });
    }, 40);

    // killing old intervals
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = 0;
    };
  }, [isRunning]);
  // updating by changing input-value
  useEffect(() => {
    setCurrentTime(initialTime);
  }, [initialTime]);

  return { currentTime, isRunning, start };
}
