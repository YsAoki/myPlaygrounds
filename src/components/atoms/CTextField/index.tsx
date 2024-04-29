import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const CTextField = React.forwardRef<HTMLDivElement, TextFieldProps>((other, ref) => {
  return <TextField variant="standard" ref={ref} sx={{ width: "100%" }} {...other} />;
});

export default CTextField;
