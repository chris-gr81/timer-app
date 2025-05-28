import "./Button.scss";
import type { ButtonProbs } from "../types/types";

function Button({ label, onClick }: ButtonProbs): React.ReactElement {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;
