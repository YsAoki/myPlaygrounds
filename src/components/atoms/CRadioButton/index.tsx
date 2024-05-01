import { FormControlLabel, Radio, RadioProps } from "@mui/material";
import { FC } from "react";

type Props = {
  value: string;
  label: string;
};

const CRadioButton: FC<Props & RadioProps> = ({ value, label, ...other }) => {
  return <FormControlLabel value={value} control={<Radio {...other} />} label={label} />;
};

export default CRadioButton;
