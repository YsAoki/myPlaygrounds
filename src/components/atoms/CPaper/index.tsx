import { Paper, PaperProps } from "@mui/material";
import { FC } from "react";
import CContainer from "../CContainer";

const CPaper: FC<PaperProps> = ({ children, ...other }) => {
  return (
    <Paper elevation={4} {...other}>
      <CContainer>{children}</CContainer>
    </Paper>
  );
};

export default CPaper;
