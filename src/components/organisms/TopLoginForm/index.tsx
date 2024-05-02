import { Button } from "@mui/material";
import { FC, FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { IS_HTTP_ONLY, IS_SECURE } from "../../../config/cookieConfig";
import { VALID_LOGIN_ID, VALID_LOGIN_PASS } from "../../../config/loginpath";
import useInput from "../../../hooks/useInput";
import CTextField from "../../atoms/CTextField";
import { SContainer, SForm, SStatusMessage, SWrapperPaper } from "./style";

const TopLoginForm: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["authTokenVal"]);

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

  useEffect(() => {
    if (cookies.authTokenVal) {
      navigate("/list");
    }
  }, []);

  const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validCredentials(inputUserId, inputUserPassword)) {
      setStatusMessage("ログインできませんでした");
      return;
    }
    setCookie("authTokenVal", "loginOn", { path: "/", maxAge: 3600, secure: IS_SECURE, httpOnly: IS_HTTP_ONLY });
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
