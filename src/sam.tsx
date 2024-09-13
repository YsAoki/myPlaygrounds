import axios from "axios";
import { FC, useEffect, useState } from "react";

const SamPage: FC = () => {
  const [apiData1, setApiData1] = useState({});
  const [apiData2, setApiData2] = useState({});
  const [apiData3, setApiData3] = useState({});

  const getData1 = () => {
    const url = "~~~~"; //GET関数ごとにそれぞれ違ったURL
    return axios.get(url); 
  };
  
  const getData2 = () => {
    const url = "~~~~"; //GET関数ごとにそれぞれ違ったURL
    return axios.get(url); 
  };
  
  const getData3 = () => {
    const url = "~~~~"; //GET関数ごとにそれぞれ違ったURL
    return axios.get(url); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 複数のAPIリクエストを並行して実行
        const [res1, res2, res3] = await Promise.all([getData1(), getData2(), getData3()]);
        
        // それぞれのレスポンスをsetState
        setApiData1(res1.data);
        setApiData2(res2.data);
        setApiData3(res3.data);
      } catch (e) {
        // error処理
      }
    };

    fetchData();
  }, []);

  return <TempletesComponent apidata1={apiData1} apidata2={apiData2} apidata3={apiData3} getData1={getData1} getData2={getData2} getData3={getData3} />;
};

export default SamPage;