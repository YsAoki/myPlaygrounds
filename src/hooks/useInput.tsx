import { ChangeEvent, useState } from "react";

type Props<T> = {
  defaultValue?: T;
};

type UseInputReturn<T> = {
  input: T;
  setInput: React.Dispatch<React.SetStateAction<T>>;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  inputIsNotEmpty: boolean;
};

const useInput = <T extends string | number>({ defaultValue = "" as T }: Props<T> = {}): UseInputReturn<T> => {
  const [input, setInput] = useState<T>(defaultValue);
  const inputIsNotEmpty = input !== "";
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value as T);
  };

  return { input, setInput, onChangeInput, inputIsNotEmpty };
};

export default useInput;