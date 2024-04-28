import { Container } from "@mui/material";
import { FC } from "react";
import Header from "../../organisms/Header";
import ListTable from "../../organisms/ListTable";

const ListLayout: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ListTable />
      </Container>
    </>
  );
};

export default ListLayout;
