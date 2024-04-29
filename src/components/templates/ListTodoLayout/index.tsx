import { Container, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { getRandomString } from "../../../utils";
import { SITE_VIEW_DATE_FORMAT, generateDateNow } from "../../../utils/convertTime";
import CContainedButton from "../../atoms/CContaiendButton";
import CTextField from "../../atoms/CTextField";
import Header from "../../organisms/Header";
import TodoCard from "../../organisms/TodoCard";

export type TodoData = {
  id: string;
  title: string;
  detail: string;
  time: string;
  complete: boolean;
};

export type Functions = {
  toggleTodoComplete: () => void;
  onClickDeleteTodo: () => void;
};

const ListTodoLayout: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoData>();

  const [todoData, setTodoData] = useState<TodoData[] | []>([]);

  // 完了のアイテムリスト
  const completedItem = todoData.filter((item) => item.complete);

  // 未完了のアイテムリスト
  const notCompletedItem = todoData.filter((item) => !item.complete);

  // 完了状態をtoggleで切り替える
  const toggleTodoComplete = (targetId: string) => {
    const updateTodos = todoData.map((item) => {
      if (item.id === targetId) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoData(updateTodos);
  };

  // 登録内容の削除
  const onClickDeleteTodo = (id: string) => {
    const v = todoData.filter((item) => !(item.id === id));
    setTodoData(v);
  };

  // 登録処理
  const onSubmit = (data: TodoData) => {
    const val = {
      id: getRandomString(),
      title: data.title,
      detail: data.detail,
      time: generateDateNow(SITE_VIEW_DATE_FORMAT),
      complete: false,
    };
    setTodoData([...todoData, val]);
    reset();
  };

  return (
    <>
      <Header />
      <Container>
        <Typography component={"h2"}>React-hook-Formを使用してフォームを作成する</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "0 auto", width: "40%", display: "flex", flexDirection: "column", border: "2px solid grey", gap: "16px", padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <CTextField
              label="TITLE"
              {...register("title", {
                required: "タイトルは必須入力だよ",
                maxLength: { value: 15, message: "タイトルは15文字以内で表現してね" },
                minLength: { value: 2, message: "タイトルは最低2文字入力してね" },
              })}
            />
          </div>
          {errors.title && <Typography color="error">{errors.title.message}</Typography>}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <CTextField label="DETAIL" {...register("detail")} />
          </div>
          <CContainedButton type="submit">追加する</CContainedButton>
        </form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>未完了</p>
            {notCompletedItem.map((item, index) => (
              <TodoCard key={index} item={item} onClickDeleteTodo={onClickDeleteTodo} toggleTodoComplete={toggleTodoComplete} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>完了</p>
            {completedItem.map((item, index) => (
              <TodoCard key={index} item={item} onClickDeleteTodo={onClickDeleteTodo} toggleTodoComplete={toggleTodoComplete} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ListTodoLayout;
