import InputField from "../../components/InputField";
import type { InputHandler } from "../../types/types";
import "./InputSection.scss";

export type InputSectionProps = {
  handleChange: InputHandler;
  disabled?: boolean;
};

function InputSection({
  handleChange,
  disabled,
}: InputSectionProps): React.ReactElement {
  return (
    <section className="input-section">
      <InputField
        label="Set time in seconds:"
        id="time-input"
        type="number"
        placeholder="0"
        onChange={handleChange}
        disabled={disabled}
      />
    </section>
  );
}

export default InputSection;
