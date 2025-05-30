import "./App.scss";
import { useInputEvent } from "./hooks/UseInputEvent";
import DisplaySection from "./sections/DisplaySection/DisplaySection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import InputSection from "./sections/InputSection/InputSection";
import MenuSection from "./sections/MenuSection/MenuSection";
import type { ButtonClick } from "./types/types";
import { useCountdownPanel } from "./hooks/UseCountdownPanel";

function App(): React.ReactElement {
  const [initialTime, handleChange] = useInputEvent();
  const { currentTime, start } = useCountdownPanel(initialTime);

  const countdown = (event: ButtonClick) => {
    const id = (event.target as HTMLButtonElement).id;

    if (id === "start") start();
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
