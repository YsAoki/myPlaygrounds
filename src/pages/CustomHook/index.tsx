import { FC, useEffect, useState } from "react";
import { UseFetch, useFetch } from "../../hooks/useFetch";
import useInput from "../../hooks/useInput";

type Posts01 = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Comments01 = {
  userId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const CustomHook: FC = () => {
  const [allgetFlag, setAllGetFlag] = useState(false);

  const { input: value01, onChangeInput: onChangeValue01 } = useInput("dvd");
  const { input: value02, onChangeInput: onChangeValue02 } = useInput("video");

  const forPost01: UseFetch<Posts01[]> = {
    path: "https://jsonplaceholder.typicode.com/posts",
    defaultData: [],
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  };

  const forComments01: UseFetch<Comments01[]> = {
    path: "https://jsonplaceholder.typicode.com/comments",
    defaultData: [],
    params: {
      key: "comments01",
      key02: "comment0102",
    },
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  };

  const { data: posts01, fetchData: fetchPost01 } = useFetch<Posts01[]>({ ...forPost01 });
  const { data: comment01, fetchData: fetchComment01 } = useFetch<Comments01[]>({ ...forComments01 });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        await Promise.allSettled([fetchPost01(), fetchComment01()]);
        setAllGetFlag(true);
      } catch (err) {
        console.log("error");
        setAllGetFlag(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <div>
      <>{!allgetFlag && <p>取得できていないよ！</p>}</>
      <>{allgetFlag && <p>取得処理はやった</p>}</>
      <>{allgetFlag && posts01?.length && <p>Post01の取得は完了</p>}</>
      <>{allgetFlag && comment01?.length && <p>Comments01の取得は完了</p>}</>
      
    </div>
  );
};

export default CustomHook;
