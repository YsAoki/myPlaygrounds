import { Container, FormControl, FormGroup, FormLabel, RadioGroup } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { CITIES_CHECK_ARR, GENDER_RADIO_ARR } from "../../../config/formConfig";
import useInput from "../../../hooks/useInput";
import CCheckBox from "../../atoms/CCheckBox";
import CContainedButton from "../../atoms/CContainedButton";
import CRadioButton from "../../atoms/CRadioButton";
import CTextField from "../../atoms/CTextField";
import Header from "../../organisms/Header";

const ListMuiFormLayout: FC = () => {
  const { input: inputTitle, onChangeInput: onChangeInputTitle } = useInput();

  const [genderValue, setGenderValue] = useState(GENDER_RADIO_ARR[0].value);

  const [selectCities, setSelectCities] = useState(CITIES_CHECK_ARR);
  const forSendSelectedCities = selectCities.filter((item) => item.checked === true).map((item) => item.value);

  const handleGenderChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setGenderValue(event.target.value);
    },
    [genderValue],
  );

  const handleCitiesChange = useCallback(
    (value: number) => {
      const convertChecked = selectCities.map((item) => {
        if (item.value === value) return { ...item, checked: !item.checked };
        return item;
      });
      setSelectCities(convertChecked);
    },
    [selectCities], // 依存関係が、変更された場合にのみ関数を再生成する。
  );

  // 最終的に送信したいAPI想定のオブジェクト
  const forSendValues = {
    inputTitle: inputTitle,
    genderValue: genderValue,
    selectCities: forSendSelectedCities,
  };

  const onSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(forSendValues);
  };

  return (
    <div>
      <Header />
      <Container>
        <h2>muiで簡単なフォームを作成する</h2>
        <form onSubmit={onSubmitEvent}>
          <p>名前</p>
          <CTextField value={inputTitle} onChange={onChangeInputTitle} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <FormLabel>性別選択</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={genderValue} onChange={handleGenderChange} row>
                {GENDER_RADIO_ARR.map((item, index) => (
                  <CRadioButton key={index} label={item.label} value={item.value} />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>行ってみたい都市</FormLabel>
              <FormGroup row>
                {selectCities.map((item, index) => (
                  <CCheckBox key={index} label={item.label} value={item.value} checked={item.checked} onChange={() => handleCitiesChange(item.value)} />
                ))}
              </FormGroup>
            </FormControl>
          </div>
          <CContainedButton type="submit">決定</CContainedButton>
        </form>
      </Container>
    </div>
  );
};

export default ListMuiFormLayout;
