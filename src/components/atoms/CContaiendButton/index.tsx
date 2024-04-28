import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

const CContainedButton: FC<ButtonProps> = ({ children, ...other }) => {
  return <Button variant="contained" {...other}>{children}</Button>;
};

export default CContainedButton;
