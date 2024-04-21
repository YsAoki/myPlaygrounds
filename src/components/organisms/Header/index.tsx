import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SHeaderTitle } from "./style";

const Header: FC = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("");
  };

  return (
    <AppBar color="primary">
      <Toolbar>
        <SHeaderTitle as="h1" onClick={onClickLogo}>
          MyPlayGround
        </SHeaderTitle>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
