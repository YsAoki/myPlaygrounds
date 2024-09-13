import { Button, Checkbox, Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { TableData } from "../../../pages/MuiDataGrid";
import { SITE_VIEW_DATE_JPN } from "../../../utils/convertTime";
import Header from "../../organisms/Header";

type Props = {
  data: TableData[];
  setData: Dispatch<SetStateAction<TableData[]>>;
};

const MuiDataGridLayout: FC<Props> = ({ data, setData }) => {
  // 別ファイルで管理するべし。
  const GENDER_ARR = ["男性", "女性"];
  const DEPARTMENT_ARR = [
    { id: 0, name: "中央銀行" },
    { id: 1, name: "北銀行" },
    { id: 2, name: "東銀行" },
    { id: 3, name: "南銀行" },
    { id: 4, name: "西銀行" },
  ];
  const extractDepartmentVal = (valNum: number) => {
    const find = DEPARTMENT_ARR.find((item) => item.id === valNum);
    if (find === undefined) return "倒産";
    return find.name;
  };

  const logRow = (targetId: string | number) => {
    const targetIndex = data.findIndex((item) => item.id === targetId);
    if (targetIndex === -1) return console.log("対象がなかったわ");
    console.log(data[targetIndex]);
  };

  const [selectIds, setSelectIds] = useState<string[]>([]);

  const onChangeCheckBox = (id: string) => {
    //チェックボックスでの選択を管理する
    const copyArr = [...selectIds];
    if (copyArr.includes(id)) {
      const v = copyArr.filter((item) => item !== id);
      return setSelectIds(v);
    }
    copyArr.push(id);
    setSelectIds(copyArr);
  };

  const isChecked = (id: string): boolean => {
    //チェックボックスの選択状態
    if (selectIds.includes(id)) return true;
    return false;
  };

  const viewCheckedData = () => {
    //チェックボックスで選択中のデータを出力
    const v = data.filter((item) => selectIds.includes(item.id));
    console.log(v);
  };

  const columns: GridColDef[] = [
    {
      field: "selected",
      headerName: "選択",
      renderCell: (params) => <Checkbox onClick={() => onChangeCheckBox(params.id as string)} checked={isChecked(params.id as string)} />,
      width: 100,
    },
    { field: "name", headerName: "名前" },
    { field: "gender", headerName: "性別", renderCell: (genderData) => <p>{GENDER_ARR[genderData.value]}</p> },
    { field: "birthDate", headerName: "生年月日", maxWidth: 150, flex: 1, renderCell: (birthDateData) => <p>{dayjs(birthDateData.value).format(SITE_VIEW_DATE_JPN)}</p> },
    {
      field: "age",
      headerName: "年齢",
      renderCell: (cellData) => (
        <Button variant="contained" onClick={() => logRow(cellData.id)}>
          {cellData.value}
        </Button>
      ),
    },
    { field: "departmentId", headerName: "所属部署", renderCell: (departmentData) => <p>{extractDepartmentVal(departmentData.value)}</p> },
    { field: "joinDate", headerName: "入社日" },
  ];

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Button variant="contained" onClick={viewCheckedData}>
          選択済みを出力
        </Button>
        {/* rows:横 columns: 縦 checkboxSelectionでテーブルにチェックボックスが出現する*/}
        <DataGrid rows={data} columns={columns} />
      </Container>
    </>
  );
};

export default MuiDataGridLayout;
