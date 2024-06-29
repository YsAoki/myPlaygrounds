// クエリパラメータで取得したstrを、numberに変換する。
export const strNumArrToNumConvert = (arr: string[]): number[] => {
  return arr.map((item) => {
    const n = Number(item);
    const thisNumberIsNaN = Number.isNaN(n)
    if (thisNumberIsNaN) {
      throw new Error(`値がおかしいから確認しろ: ${item}`);
    }
    return n;
  });
};