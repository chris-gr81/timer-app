import { useState } from "react";

export function useInputEvent(): [
  number,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [inputValue, setInputValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = parseFloat(event.target.value);
    setInputValue(numericValue);
  };
  return [inputValue, handleChange];
}
