import type { InputHandler } from "../types/types";
import "./InputField.scss";

type InputProps = {
  label: string;
  type: string;
  id: string;
  onChange: InputHandler;
  placeholder?: string;
};

function InputField({
  label,
  type,
  id,
  onChange,
  placeholder,
}: InputProps): React.ReactElement {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
