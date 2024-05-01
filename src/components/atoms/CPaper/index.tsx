import { Container, Paper, PaperProps } from "@mui/material";
import { FC } from "react";

const CPaper: FC<PaperProps> = ({ children, ...other }) => {
  return (
    <Paper elevation={4} {...other}>
      <Container sx={{ padding: "16px 0" }}>{children}</Container>
    </Paper>
  );
};

export default CPaper;
