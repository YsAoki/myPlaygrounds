import dayjs from "dayjs";

export const SITE_VIEW_DATE_FORMAT = "YYYY年MM月DD日HH時mm分"

// 現在時刻を作成する。
export const generateDateNow = (formatString: string) => dayjs().format(formatString);