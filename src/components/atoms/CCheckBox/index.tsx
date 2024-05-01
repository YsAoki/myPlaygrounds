import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { FC } from "react";

type Props = {
  label: string;
  value: number;
  checked: boolean;
  onChange: () => void; 
};

const CCheckBox: FC<Props & CheckboxProps> = ({ label, value, checked, onChange, ...other }) => {
  return (
    <FormControlLabel 
      control={<Checkbox checked={checked} value={value} onChange={onChange} {...other} />} 
      label={label} 
    />
  );
};

export default CCheckBox;