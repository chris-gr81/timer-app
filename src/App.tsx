import DisplaySection from "./sections/DisplaySection/DisplaySection";
import InputSection from "./sections/InputSection/InputSection";
import MenuSection from "./sections/MenuSection/MenuSection";

function App(): React.ReactElement {
  return (
    <div>
      <InputSection />
      <DisplaySection />
      <MenuSection />
    </div>
  );
}

export default App;
