import "./App.scss";
import { useInputEvent } from "./hooks/UseInputEvent";
import DisplaySection from "./sections/DisplaySection/DisplaySection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import InputSection from "./sections/InputSection/InputSection";
import MenuSection from "./sections/MenuSection/MenuSection";

function App(): React.ReactElement {
  const [initialTime, handleChange] = useInputEvent();
  return (
    <main className="app">
      <HeaderSection />
      <InputSection handleChange={handleChange} />
      <DisplaySection value={initialTime} />
      <MenuSection />
    </main>
  );
}

export default App;
