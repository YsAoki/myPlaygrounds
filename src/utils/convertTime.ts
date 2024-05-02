import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

export const SITE_VIEW_DATE_DEFAULT ="YYYY-MM-DD"

export const SITE_VIEW_DATE_FORMAT = "YYYY年MM月DD日HH時mm分"

// 現在時刻を作成する。
export const generateDateNow = (formatString: string = SITE_VIEW_DATE_DEFAULT) => dayjs().format(formatString);

// 指定された日付をJSTに変換し、ISO 8601形式で出力する関数
export const formatDateToISO8601WithJST = (inputDate: string) => {
  // 入力された日付をパースし、JSTタイムゾーンに変換
  const dateInJST = dayjs(inputDate, "YYYY-MM-DD").tz('Asia/Tokyo');
  // ISO 8601形式（タイムゾーン付き）で出力
  return dateInJST.format("YYYY-MM-DDTHH:mm:ssZ");
};

// 指定された日付をUTCに変換し、ISO 8601形式で出力する関数（末尾がZ）
export const formatDateToISO8601WithUTCEndZ = (inputDate: string) => {
  // 入力された日付をパースし、UTCに変換
  const dateInUTC = dayjs(inputDate, "YYYY-MM-DD").utc();
  // ISO 8601形式（UTC）で出力
  return dateInUTC.format("YYYY-MM-DDTHH:mm:ss[Z]");
};
// 指定された日付をUTCに変換し、ISO 8601形式で出力する関数（末尾が0）
export const formatDateToISO8601WithUTCEndZero = (inputDate: string) => {
  // 入力された日付をパースし、UTCに変換
  const dateInUTC = dayjs(inputDate, "YYYY-MM-DD").utc();
  // ISO 8601形式（UTC）で出力
  return dateInUTC.format("YYYY-MM-DDTHH:mm:ssZ");
};