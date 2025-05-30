import "./DisplaySection.scss";

type DisplaySectionProbs = {
  value: number;
};

function DisplaySection({ value }: DisplaySectionProbs): React.ReactElement {
  return (
    <div className="display-section">
      <div className="display-section__label">Time left:</div>
      <div className="display-section__timer">{value.toFixed(3)}s</div>
    </div>
  );
}

export default DisplaySection;
