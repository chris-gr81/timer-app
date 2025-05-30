import { useState, useEffect } from "react";
import "./App.scss";
import { useInputEvent } from "./hooks/UseInputEvent";
import DisplaySection from "./sections/DisplaySection/DisplaySection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import InputSection from "./sections/InputSection/InputSection";
import MenuSection from "./sections/MenuSection/MenuSection";
import type { ButtonClick } from "./types/types";

function App(): React.ReactElement {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [initialTime, handleChange] = useInputEvent();

  useEffect(() => {
    setCurrentTime(initialTime);
  }, [initialTime]);

  const countdown = (event: ButtonClick) => {
    const id = (event.target as HTMLButtonElement).id;
    if (id === "start") {
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return parseFloat((prev - 0.04).toFixed(3));
        });
      }, 40);
    }
  };
  return (
    <main className="app">
      <HeaderSection />
      <InputSection handleChange={handleChange} />
      <DisplaySection value={currentTime} />
      <MenuSection onClick={countdown} />
    </main>
  );
}

export default App;
