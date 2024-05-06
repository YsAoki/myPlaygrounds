import { Paper, Typography, styled } from "@mui/material";

export const SWrapperPaper = styled(Paper)`
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  position: absolute;
  width: 400px;
`

export const SForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SStatusMessage = styled(Typography)`
  color: ${({theme}) => theme.palette.error.main};
`