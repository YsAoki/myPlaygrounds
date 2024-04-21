import { Box, Container, Paper, styled } from "@mui/material";

export const SWrapperPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`

export const SContainer = styled(Container)`
  padding: 16px;
`

export const SForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`