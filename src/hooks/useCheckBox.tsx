import { ChangeEvent, useState } from "react";

export const useCheckBox = (defaultValue: string[] = []) => {
  const [checkedArray, setCheckedArray] = useState(defaultValue);
  const onChangeCheckedArray = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const copyArray = [...checkedArray];
    if (checkedArray.includes(value)) return setCheckedArray(copyArray.filter((item) => item !== value));
    copyArray.push(value);
    setCheckedArray(copyArray);
  };
  return [checkedArray, setCheckedArray, onChangeCheckedArray] as const;
};
