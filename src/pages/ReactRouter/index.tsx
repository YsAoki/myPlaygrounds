import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Top from "../Top";

const ReactRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  );
};

export default ReactRouter;
