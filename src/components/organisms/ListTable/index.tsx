import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RELEASE_DETAILS } from "../../../config/ReleaseDetail";
import { addNumPrefixZero } from "../../../utils/convertString";
import CContainedButton from "../../atoms/CContainedButton";
import { STableCell, STableRow } from "./style";

export const ListTable: FC = () => {
  const navigate = useNavigate();

  const onClickNavigate = (url: string) => {
    const v = `/list/${url}`;
    navigate(v);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <STableCell>No.</STableCell>
            <STableCell>タイトル</STableCell>
            <STableCell>説明</STableCell>
            <STableCell>登録日</STableCell>
            <STableCell>アクション</STableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RELEASE_DETAILS.map((item, index) => (
            <STableRow key={index}>
              <STableCell>{addNumPrefixZero(index + 1)}</STableCell>
              <STableCell>{item.title}</STableCell>
              <STableCell>{item.detail}</STableCell>
              <STableCell>{item.date}</STableCell>
              <STableCell>
                <CContainedButton onClick={() => onClickNavigate(item.url)}>移動</CContainedButton>
              </STableCell>
            </STableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
