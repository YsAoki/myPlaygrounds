import { styled } from "@mui/material/styles";

// ーーーーーーー①ーーーーーーー
// typeを定義する場合
type ButtonProps = {
  colorChange?: boolean;
}
export const SStyleChangeButton = styled("button")<ButtonProps>`
    border: 1px solid grey;
    background-color: ${(props) => props.colorChange? "red": "blue"};
`;
// ーーーーーーーーーーーーーー

// ーーーーーーー②ーーーーーーー
// typeを定義しないinlinePropsの場合
export const SStyleChangeButton2 = styled("button")<{ colorChange?: boolean }>`
    border: 1px solid grey;
    background-color: ${(props) => props.colorChange? "red": "blue"};
    `;
    
// ーーーーーーー③ーーーーーーー
// inlinePropsで複数の値を引き渡す場合
export const SStyleChangeButton3 = styled("button")<{
  colorChange?: boolean;
  size?: string;
}>`
    border: 1px solid grey;
    background-color: ${(props) => props.colorChange? "red": "blue"};
    font-size: ${(props) => props.size || "16px"};
`;

