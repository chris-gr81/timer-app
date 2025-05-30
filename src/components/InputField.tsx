import type { InputProps } from "../types/types";
import "./InputField.scss";

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
