import { FC, useEffect, useState } from "react";
import CContainedButton from "../../atoms/CContainedButton";
import CContainer from "../../atoms/CContainer";
import Header from "../../organisms/Header";

const BUTTONS_ARR: { text: string; color: "warning" | "primary" | "inherit" | "secondary" | "success" | "error" | "info" }[] = [
  {
    text: "ボタン1",
    color: "warning",
  },
  {
    text: "ボタン2",
    color: "warning",
  },
  {
    text: "ボタン3",
    color: "warning",
  },
  {
    text: "ボタン4",
    color: "primary",
  },
  {
    text: "ボタン5",
    color: "primary",
  },
];
const ListIndexChangeLayout: FC = () => {
  const [buttonsArr, setButtonsArr] = useState(BUTTONS_ARR);

  const indexReplacement = (targetArr: any, index1: number, index2: number) => {
    const val1 = targetArr[index1];
    const val2 = targetArr[index2];
    const newArr = [...targetArr];
    newArr[index2] = val1;
    newArr[index1] = val2;
    setButtonsArr(newArr);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      indexReplacement(buttonsArr, 0, 4);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Header />
      <CContainer style={{ display: "flex", gap: "16px" }}>
        {buttonsArr.map((item, index) => (
          <CContainedButton key={index} color={item.color}>
            {item.text}
          </CContainedButton>
        ))}
      </CContainer>
    </>
  );
};

export default ListIndexChangeLayout;
