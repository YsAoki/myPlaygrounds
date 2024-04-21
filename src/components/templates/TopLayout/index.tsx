import { FC } from "react";
import Header from "../../organisms/Header";
import TopLoginForm from "../../organisms/TopLoginForm";

const TopLayout: FC = () => {
  return (
    <>
      <Header />
      <TopLoginForm />
    </>
  );
};

export default TopLayout;
