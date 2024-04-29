import { FC } from "react";
import CContainedButton from "../../atoms/CContaiendButton";
import { TodoData } from "../../templates/ListTodoLayout";
import { STodoCardWrapper } from "./style";

type Props = {
  item: TodoData;
  toggleTodoComplete: (id: string) => void;
  onClickDeleteTodo: (id: string) => void;
};

const TodoCard: FC<Props> = ({ item, toggleTodoComplete, onClickDeleteTodo }) => {
  const viewButtonText = item.complete ? "戻す" : "完了";

  return (
    <STodoCardWrapper>
      <p>{item.title}</p>
      <p>{item.detail}</p>
      <p>{item.time}</p>
      <CContainedButton onClick={() => toggleTodoComplete(item.id)}>{viewButtonText}</CContainedButton>
      <CContainedButton onClick={() => onClickDeleteTodo(item.id)}>削除</CContainedButton>
    </STodoCardWrapper>
  );
};

export default TodoCard;
