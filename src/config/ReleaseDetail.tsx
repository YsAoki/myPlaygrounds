import { ReactNode } from "react";
import ListMuiDefaultColors from "../pages/ListMuiDefaultColors";

export type ReleaseDetail = {
  title: string;
  url: string;
  element: ReactNode;
  detail: string;
  date: string;
};

export const RELEASE_DETAILS: ReleaseDetail[] = [
  {
    title: "Muiデフォルトカラーパレット",
    url: "mui_color_list",
    element: <ListMuiDefaultColors />,
    detail: "muiで使用する、themeカラー一覧",
    date: "2024/04/28",
  },
];
