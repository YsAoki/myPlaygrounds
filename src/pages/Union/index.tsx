import { Button } from "@mui/material";
import { FC } from "react";

// Recordとユニオンで使う型定義
type SampleObjectRecord = Record<"name01" | "name02" | "name03", string>;

// 一般的なオブジェクトとして型定義するケース(今回は使用しません)
type SampleObjectType = {
  name01: string;
  name02: string;
  name03: string;
};

const Union: FC = () => {
  const sampleObject: SampleObjectRecord = {
    name01: "東京",
    name02: "大阪",
    name03: "北海道",
  };

  // sampleObjectのキー（name01, name02, name03）をユニオン型として取得する
  const logFunction = (name: keyof typeof sampleObject) => {
    console.log(sampleObject[name]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button onClick={() => logFunction("name01")}>東京を出力</Button>
      <Button onClick={() => logFunction("name02")}>大阪を出力</Button>
      <Button onClick={() => logFunction("name03")}>北海道を出力</Button>
    </div>
  );
};

export default Union;
