import "./Button.scss";
import type { ButtonProps } from "../types/types";

function Button({ label, onClick }: ButtonProps): React.ReactElement {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;
