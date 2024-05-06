import { FC, useState } from "react";
import CContainedButton from "../../atoms/CContainedButton";
import CContainer from "../../atoms/CContainer";
import Header from "../../organisms/Header";
import { SStyleChangeButton, SStyleChangeButton3 } from "./style";

const ListStylePropsLayout: FC = () => {
  const [toggleState, setToggleState] = useState(false);

  const onClickToggleState = () => {
    setToggleState(!toggleState);
  };
  return (
    <div>
      <Header />
      <CContainer>
        <h3>別ファイルで管理しているstyle.tsに、適切な形でbool値や文字列を引き渡す</h3>
        <CContainedButton onClick={onClickToggleState}>配色切り替え</CContainedButton>
        <p>色変更の実施</p>
        <SStyleChangeButton colorChange={toggleState}>色が変わるよ</SStyleChangeButton>
        <p>同じコンポーネントを使用してboolを渡さなかった場合はfalseが適用される</p>
        <SStyleChangeButton>propsを引き渡していない場合</SStyleChangeButton>
        <p>propsで値を引き渡すが、typeを定義しないで「inline props」で複数引き渡す場合</p>
        <SStyleChangeButton3 colorChange={toggleState} size="20px">
          propsをinline Ver(複数)
        </SStyleChangeButton3>
      </CContainer>
    </div>
  );
};

export default ListStylePropsLayout;
