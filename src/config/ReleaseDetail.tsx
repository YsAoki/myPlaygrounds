import { ReactNode } from "react";
import MuiDefaultPaletteColorButtons from "../pages/muiDefaultPaletteColorButtons";

export type ReleaseDetail = {
  title: string;
  url: string;
  element: ReactNode;
  detail: string;
};

export const RELEASE_DETAILS: ReleaseDetail[] = [
  {
    title: "Muiのデフォルトカラーパレット",
    url: "/mui_color_list",
    element: <MuiDefaultPaletteColorButtons />,
    detail: "muiで使用する、themeのテンプレートカラーを使ってボタンを再現している",
  },
];
