import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { FC, useState } from "react";
import { SITE_VIEW_DATE_DEFAULT, formatDateToISO8601WithJST, formatDateToISO8601WithUTCEndZ, formatDateToISO8601WithUTCEndZero } from "../../../utils/convertTime";
import CContainer from "../../atoms/CContainer";
import CPaper from "../../atoms/CPaper";
import Header from "../../organisms/Header";

const ListDayjsLayout: FC = () => {
  const mappingArr = [
    {
      title: "ISO8601とは",
      detail: "日付と時間の組み合わせ: ISO 8601は日付と時間の組み合わせを明確に表現するための形式を定義しています。基本形式は YYYY-MM-DDTHH:MM:SSZ であり、これはUTCでの時間を示します。T は日付と時間の区切り、Z はUTCを示す。",
    },
    {
      title: "UTCとは",
      detail:
        "協定世界時（UTC）とは、国際的に認められた世界標準時であり、全ての時間帯の基準となる。グリニッジ標準時（GMT）と同一の時間を示す全世界の時刻調整と日付管理に使用され、国際的な航空、金融市場、世界中のコンピュータネットワークで広く採用されている。",
    },
    {
      title: "オフセットとは",
      detail: "UTCからの時差を示す。UTCをオフセット付きUTCで示したい場合は時差が無いため1997-07-16T19:20:30+00:00",
    },
    {
      title: "日本時間(JST)と世界協定時刻(UTC)の時差について",
      detail: "JSTはUTCより+9:00。例: Z: UTC時間 +hh:mm (JSTでは+09:00)。",
    },
    {
      title: "UTCの書き方",
      detail: "例: YYYY-MM-DDThh:mm:ssZ → 1997-07-16T19:20:30Z",
    },
    {
      title: "JSTの書き方",
      detail: "例: YYYY-MM-DDThh:mm:ssTZD → 1997-07-16T19:20:30+09:00",
    },
    {
      title: "省略可能な日付要素について",
      detail: "ミリ秒は省略可能。日付データはJSONでは文字列、TypeScriptではDate型として扱う。",
    },
    {
      title: "APIレスポンスとローカルタイムゾーン",
      detail: "JSTで返却されるAPIレスポンスを使用する際、dayjsなどのライブラリを用いると、ユーザーのローカルタイムゾーンに基づいた日付表示が可能。",
    },
    {
      title: "タイムゾーン設計の重要性",
      detail: "タイムゾーンは設計段階で統一を図るべきです。タイムゾーンを考慮しないUIでは、変換処理が必要です。",
    },
  ];

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const selectedDateIsNotNull = selectedDate !== null;

  const handleChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <>
      <Header />
      <CContainer>
        {/* アプリケーション全体で使用することが多いため、本来はmain.ts内に書くべき */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <h2>時間管理の要点</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px" }}>
            {mappingArr.map((item, index) => (
              <li key={index}>
                <CPaper>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </CPaper>
              </li>
            ))}
          </ul>
          <div>
            <h2>時間入力サンプル</h2>
            <DatePicker label="日付入力" onChange={handleChange} value={selectedDate} />
          </div>
          {selectedDateIsNotNull && (
            <div>
              <p>選択した日付を表示するだけの場合("YYYY-MM-DD")「日付のフォーマット」</p>
              <p>{selectedDate.format(SITE_VIEW_DATE_DEFAULT)}</p>
              <p>jst表示（末尾にUTCからの時差を示す +09:00）</p>
              <p>{formatDateToISO8601WithJST(selectedDate.format(SITE_VIEW_DATE_DEFAULT))}</p>
              <p>UTC（末尾がZ「Zulu Time」または「ISO 8601 UTC format」）</p>
              <p>{formatDateToISO8601WithUTCEndZ(selectedDate.format(SITE_VIEW_DATE_DEFAULT))}</p>
              <p>選択した日付をUTC化する場合（末尾が0「オフセット付きUTC」）</p>
              <p>{formatDateToISO8601WithUTCEndZero(selectedDate.format(SITE_VIEW_DATE_DEFAULT))}</p>
            </div>
          )}
        </LocalizationProvider>
      </CContainer>
    </>
  );
};

export default ListDayjsLayout;
