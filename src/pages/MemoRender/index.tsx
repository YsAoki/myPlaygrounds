import { ChangeEvent, FC, useState } from "react";
import MemoRenderChild from "./MemoRenderChild";

const MemoRender: FC = () => {
  // 文字入力を管理するinputのuseState
  const [input, setInput] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInput(v);
  };
  console.log(input);

  const messageArr: string[] = ["大将", "中将", "少将"];
  return (
    <div style={{ padding: "3rem" }}>
      <h1>これは親コンポーネントです</h1>
      <input type="text" value={input} onChange={onChangeInput} />
      <h2>これより下で小コンポーネントを展開します</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {messageArr.map((message, index) => (
          <MemoRenderChild key={index} message={message} input={input} />
        ))}
      </div>
    </div>
  );
};

export default MemoRender;
