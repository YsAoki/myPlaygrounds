import { FC, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { RELEASE_DETAILS } from "../../config/ReleaseDetail";
import List from "../List";
import Top from "../Top";

const ReactRouter: FC = () => {
  const location = useLocation();

  const [cookies] = useCookies(["authTokenVal"]);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(cookies);
    if (!cookies.authTokenVal) {
      navigate("/");
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/list" element={<List />} />
      {RELEASE_DETAILS.map((item) => (
        <Route key={item.url} path={`/list/${item.url}`} element={item.element} />
      ))}
    </Routes>
  );
};

export default ReactRouter;
