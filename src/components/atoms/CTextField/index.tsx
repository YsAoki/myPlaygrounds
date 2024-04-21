import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

const CTextField: FC<TextFieldProps> = ({ ...other }) => {
  return <TextField variant="standard" {...other} />;
};

export default CTextField;
