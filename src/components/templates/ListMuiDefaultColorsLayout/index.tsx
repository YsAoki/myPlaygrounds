import { Container } from "@mui/material";
import { FC } from "react";
import CContainedButton from "../../atoms/CContaiendButton";
import Header from "../../organisms/Header";
import { SFlexBox } from "./style";

const ListMuiDefaultColorsLayout: FC = () => {
  const COLORS_ARR = ["primary", "secondary", "error", "warning", "info", "success"];

  return (
    <>
      <Header />
      <Container>
        <SFlexBox>
          {COLORS_ARR.map((item, index) => (
            // @ts-ignore
            <CContainedButton key={index} color={item}>
              {item}
            </CContainedButton>
          ))}
        </SFlexBox>
        <ul>
          <li>main: コンポーネントのデフォルトの色として使用されます。</li>
          <li>light: コンポーネントがアクティブ（例えばクリックされた）状態で表示されるより明るい色です。</li>
          <li>dark: コンポーネントにマウスがホバーされたときに表示されるより暗い色です。</li>
        </ul>
      </Container>
    </>
  );
};

export default ListMuiDefaultColorsLayout;
