export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export type InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type InputSectionProps = {
  handleChange: InputHandler;
};

export type InputProps = {
  label: string;
  type: string;
  id: string;
  onChange: InputHandler;
  placeholder?: string;
};

export type DisplaySectionProbs = {
  value: number;
};
