import "./MenuSection.scss";
import Button from "../../components/Button";

function MenuSection(): React.ReactElement {
  return (
    <div className="menu-section">
      <Button label="Start" onClick={() => console.log("Klick!")} />
      <Button label="Pause" onClick={() => console.log("Klick!")} />
      <Button label="Reset" onClick={() => console.log("Klick!")} />
    </div>
  );
}

export default MenuSection;
