import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { RELEASE_DETAILS } from "../../config/ReleaseDetail";
import Top from "../Top";

const ReactRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/list" />
      {RELEASE_DETAILS.map((item) => (
        <Route key={item.url} path={`/list${item.url}`} element={item.element} />
      ))}
    </Routes>
  );
};

export default ReactRouter;
