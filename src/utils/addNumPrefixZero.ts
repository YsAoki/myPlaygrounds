// 入力された数値が1桁の場合、頭文字に0を追加する
export const addNumPrefixZero = (item: string | number) => {
  return Number(item.toString().padStart(2, "0"));
}