import { FC } from "react";

// キー名として呼び出すと、自動的に数字が割り振られる
enum enum01 {
  a,
  b,
  c,
}

enum enum02 {
  a = "A",
  b = "B",
  c = "C",
}

type SamObj = {
  name: string;
  age: number;
  from: string;
};

const TypeScriptSample: FC = () => {
  const printEnum01 = () => {
    alert(enum01.a);
  };

  const reverseMappingPrintEnum01 = () => {
    alert(enum01[0]);
  };

  const printEnum02 = () => {
    alert(enum02.a);
  };

  // オブジェクトから抜粋したキー名を使用して、keyof typeofを使うことでユニオン型が生成できる。
  // key: keyof typeof SAM_OBJ -> "name" "age" "from"のユニオン型
  const SAM_OBJ: SamObj = {
    name: "john",
    age: 15,
    from: "tokyo",
  };

  type TT = keyof typeof SAM_OBJ;

  const onClickSamObj = (key: TT) => {
    console.log(SAM_OBJ[key]);
    console.log(Object.keys(SAM_OBJ))
  };

  return (
    <div>
      <p>enum型は非推奨</p>
      <button onClick={printEnum01}>enum01を出力</button>
      <button onClick={reverseMappingPrintEnum01}>enum01をリバースマッピングで出力</button>
      <button onClick={printEnum02}>enum02を出力</button>
      <p>とは言え非推奨なのであんまり使わない方がいいかな。</p>
      <button onClick={() => onClickSamObj("from")}>keyoftypeofでのオブジェクトの出力</button>
    </div>
  );
};

export default TypeScriptSample;
