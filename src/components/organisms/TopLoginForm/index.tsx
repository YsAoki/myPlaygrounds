import { Button } from "@mui/material";
import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VALID_LOGIN_ID, VALID_LOGIN_PASS } from "../../../config/loginpath";
import useInput from "../../../hooks/useInput";
import CTextField from "../../atoms/CTextField";
import { SContainer, SForm, SStatusMessage, SWrapperPaper } from "./style";

const TopLoginForm: FC = () => {
  const navigate = useNavigate();
  // ID用のinputフック
  const { input: inputUserId, onChangeInput: onChangeUserId } = useInput();
  // パスワード用のinputフック
  const { input: inputUserPassword, onChangeInput: onChangeUserPassword } = useInput();

  const [statusMessage, setStatusMessage] = useState("");
  const hasStatusMessage = statusMessage !== "";

  const validCredentials = (userId: string | number, userPassword: string | number): boolean => {
    return userId === VALID_LOGIN_ID && userPassword === VALID_LOGIN_PASS;
  };

  const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validCredentials(inputUserId, inputUserPassword)) {
      setStatusMessage("ログインできませんでした");
      return;
    }
    navigate("/list");
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
          {hasStatusMessage && <SStatusMessage>{statusMessage}</SStatusMessage>}
          <Button type="submit">GO</Button>
        </SForm>
      </SContainer>
    </SWrapperPaper>
  );
};

export default TopLoginForm;
