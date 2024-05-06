import { Container, ContainerProps } from "@mui/material";
import { FC } from "react";

const CContainer: FC<ContainerProps> = ({ children, ...other }) => {
  return (
    <Container sx={{ padding: "16px 0" }} {...other}>
      {children}
    </Container>
  );
};

export default CContainer;
