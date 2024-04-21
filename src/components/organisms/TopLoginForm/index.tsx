import { Button } from "@mui/material";
import { FC } from "react";
import useInput from "../../../hooks/useInput";
import CTextField from "../../atoms/CTextField";
import { SContainer, SForm, SWrapperPaper } from "./style";
import { useNavigate } from "react-router-dom";

const TopLoginForm: FC = () => {

  const navigate = useNavigate();
  // ID用のinputフック
  const { input: inputUserId, onChangeInput: onChangeUserId } = useInput();
  // パスワード用のinputフック
  const { input: inputUserPassword, onChangeInput: onChangeUserPassword } = useInput();

  const inputValues = {
    id: inputUserId,
    password: inputUserPassword,
  };

  const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/list")
  };

  return (
    <SWrapperPaper elevation={12}>
      <SContainer>
        <SForm
          onSubmit={(e) => {
            onSubmitEvent(e);
          }}
        >
          <CTextField label="LOGIN_ID" value={inputUserId} onChange={onChangeUserId} />
          <CTextField label="LOGIN_PASSWORD" value={inputUserPassword} onChange={onChangeUserPassword} />
          <Button type="submit">GO</Button>
        </SForm>
      </SContainer>
    </SWrapperPaper>
  );
};

export default TopLoginForm;
