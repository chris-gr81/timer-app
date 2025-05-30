import type { ButtonClick } from "../types/types";
import "./Button.scss";

export type ButtonProps = {
  label: string;
  id: string;
  onClick: (event: ButtonClick) => void;
};

function Button({ label, id, onClick }: ButtonProps): React.ReactElement {
  return (
    <button id={id} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
