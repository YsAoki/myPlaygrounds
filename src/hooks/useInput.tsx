import { ChangeEvent, useState } from "react";

type Props = {
  defaultValue?: string;
};

type UseInputReturn = {
  input: string | number;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};
const useInput = ({ defaultValue = "" }: Props = {}): UseInputReturn => {
  const [input, setInput] = useState<string>(defaultValue);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { input, onChangeInput };
};

export default useInput;
