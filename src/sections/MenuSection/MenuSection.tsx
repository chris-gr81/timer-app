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
      <Button id="pause" label="Pause" onClick={onClick} />
      <Button id="reset" label="Reset" onClick={onClick} />
    </div>
  );
}

export default MenuSection;
