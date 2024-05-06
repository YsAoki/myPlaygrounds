import { FC } from "react";
import CContainer from "../../atoms/CContainer";
import Header from "../../organisms/Header";
import ListTable from "../../organisms/ListTable";

const ListLayout: FC = () => {
  return (
    <>
      <Header />
      <CContainer>
        <ListTable />
      </CContainer>
    </>
  );
};

export default ListLayout;
