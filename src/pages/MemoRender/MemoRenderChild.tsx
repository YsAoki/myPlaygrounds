import { FC } from "react";

type MemoRenderChildProps = {
  message: string;
  input: string;
};

const MemoRenderChild: FC<MemoRenderChildProps> = ({ message, input }) => {
  console.log(`${message} + ${input}が入力されている`);
  return (
    <>
      <div style={{ border: "1px solid black", padding: "2rem" }}>{message}</div>
      <div>{input}が入力されている</div>
    </>
  );
};

export default MemoRenderChild;
