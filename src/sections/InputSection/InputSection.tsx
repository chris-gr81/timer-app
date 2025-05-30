import InputField from "../../components/InputField";
import type { InputSectionProps } from "../../types/types";
import "./InputSection.scss";

function InputSection({ handleChange }: InputSectionProps): React.ReactElement {
  return (
    <section className="input-section">
      <InputField
        label="Set time in seconds:"
        id="time-input"
        type="number"
        placeholder="0"
        onChange={handleChange}
      />
    </section>
  );
}

export default InputSection;
