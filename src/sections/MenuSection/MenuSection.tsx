import "./MenuSection.scss";
import Button from "../../components/Button";
import type { ButtonClick } from "../../types/types";

type MenuSectionProps = {
  onClick: (event: ButtonClick) => void;
};
function MenuSection({ onClick }: MenuSectionProps): React.ReactElement {
  return (
    <div className="menu-section">
      <Button id="start" label="Start" onClick={onClick} />
      <Button id="pause" label="Pause" onClick={() => console.log("Klick!")} />
      <Button id="reset" label="Reset" onClick={() => console.log("Klick!")} />
    </div>
  );
}

export default MenuSection;
