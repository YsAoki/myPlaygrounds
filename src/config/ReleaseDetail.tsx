import { ReactNode } from "react";
import ListMuiDefaultColors from "../pages/ListMuiDefaultColors";
import ListTodo from "../pages/ListTodo";

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
  {
    title: "React-hook-form_Todo",
    url: "react_hook_form_todo",
    element: <ListTodo />,
    detail: "react-hook-formを使用したTodoアプリ",
    date: "2024/04/29",
  },
];
