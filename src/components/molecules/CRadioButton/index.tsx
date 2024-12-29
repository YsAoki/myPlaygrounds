import { FormControlLabel, Radio, RadioProps } from "@mui/material";
import { ChangeEvent, FC } from "react";

type CRadioProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & RadioProps;

const CRadio: FC<CRadioProps> = ({ label, value, checked, onChange, ...other }) => {
  return <FormControlLabel label={label} control={<Radio value={value} checked={checked} onChange={onChange} {...other} />} />;
};

export default CRadio;
