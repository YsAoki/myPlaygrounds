import { ReactNode } from "react";
import ListIndexChange from "../pages/ListIndexChange";
import ListMuiDefaultColors from "../pages/ListMuiDefaultColors";
import ListMuiForm from "../pages/ListMuiForm";
import ListStyleProps from "../pages/ListStyleProps";
import ListTodo from "../pages/ListTodo";
import ListDayjs from "../pages/ListUseDayjs";
import MemoRender from "../pages/MemoRender";
import MuiDataGrid from "../pages/MuiDataGrid";
import TypeScriptSample from "../pages/TypeScriptSample";
import CustomHook from "../pages/CustomHook";
import UpLoadFiles from "../pages/UploadFiles";
import Union from "../pages/Union";

type ReleaseDetail = {
  title: string;
  url: string;
  element: ReactNode;
  detail: string;
  date: string;
};

export const RELEASE_DETAILS: ReleaseDetail[] = [
  {
    title: "MuiDefaultButtons",
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
  {
    title: "DayjsPractice",
    url: "dayjs_sample",
    element: <ListDayjs />,
    detail: "日付変換ライブラリ、day.jsの変換",
    date: "2024/04/29",
  },
  {
    title: "MuiForm",
    url: "mui_form",
    element: <ListMuiForm />,
    detail: "muiを使用して、チェックボックス、ラジオボタンのフォームを作成",
    date: "2024/04/29",
  },
  {
    title: "index_changer",
    url: "index_changer",
    element: <ListIndexChange />,
    detail: "表示されるindex番号をtimeoutで入れ替える",
    date: "2024/04/29",
  },
  {
    title: "style_props",
    url: "style_props",
    element: <ListStyleProps />,
    detail: "propsを引き渡してスタイルを変更する",
    date: "2024/04/29",
  },
  {
    title: "mui_datagrid",
    url: "mui_ddtagrid",
    element: <MuiDataGrid />,
    detail: "MuiDataGridを使用する",
    date: "2024/08/20",
  },
  {
    title: "typescriptsample",
    url: "ts_sample",
    element: <TypeScriptSample />,
    detail: "enumとkeyoftypeof、ユニオンについて",
    date: "2024/09/11",
  },
  {
    title: "レンダリングとメモ",
    url: "memo-and-rendering",
    element: <MemoRender />,
    detail: "useCallBackやメモ、レンダリングについて",
    date: "2024/10/06",
  },
  {
    title: "カスタムフックとPromise.all",
    url: "costom-hook-promise-all",
    element: <CustomHook />,
    detail: "カスタムフックで作るAxios get",
    date: "2024/10/20",
  },
  {
    title: "fileuploadのuseState",
    url: "file-upload",
    element: <UpLoadFiles />,
    detail: "ファイルアップロードのstate管理とbase64変換",
    date: "2024/11/17",
  },
  {
    title: "TypeScriptでのUnionについて",
    url: "use-union",
    element: <Union />,
    detail: "TypeScriptでUnion型を使用する",
    date: "2024/12/08",
  },
];
