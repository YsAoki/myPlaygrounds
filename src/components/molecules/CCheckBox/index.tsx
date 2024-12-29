import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { ChangeEvent, FC } from "react";

type CCheckBoxProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & CheckboxProps;

const CCheckBox: FC<CCheckBoxProps> = ({ label, value, checked, onChange, ...other }) => {
  return <FormControlLabel label={label} control={<Checkbox value={value} checked={checked} onChange={onChange} {...other} />} />;
};

export default CCheckBox;


