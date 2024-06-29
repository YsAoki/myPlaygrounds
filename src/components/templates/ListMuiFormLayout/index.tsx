import { FormControl, FormGroup, FormLabel, RadioGroup } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CITIES_CHECK_ARR, GENDER_RADIO_ARR } from "../../../config/formConfig";
import useInput from "../../../hooks/useInput";
import { strNumArrToNumConvert } from "../../../utils/forQueryParams";
import CCheckBox from "../../atoms/CCheckBox";
import CContainedButton from "../../atoms/CContainedButton";
import CContainer from "../../atoms/CContainer";
import CRadioButton from "../../atoms/CRadioButton";
import CTextField from "../../atoms/CTextField";
import Header from "../../organisms/Header";

const ListMuiFormLayout: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { input: title, setInput: setTitle, onChangeInput: handleTitleChange } = useInput();
  const [gender, setGender] = useState(GENDER_RADIO_ARR[0].value);
  const [cities, setCities] = useState(CITIES_CHECK_ARR);
  const selectedCities = cities.filter((city) => city.checked).map((city) => city.value);

  const handleGenderChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setGender(e.target.value);
    },
    [gender],
  );

  const handleCityChange = useCallback(
    (value: number) => {
      const updatedCities = cities.map((city) => {
        if (city.value === value) return { ...city, checked: !city.checked };
        return city;
      });
      setCities(updatedCities);
    },
    [cities],
  );

  const formValues = {
    title: title,
    gender: gender,
    selectedCities: selectedCities,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryParams: Record<string, string> = {};
    if (title) queryParams.title = title as string;
    if (gender) queryParams.gender = gender;
    if (selectedCities.length > 0) queryParams.selectedCities = selectedCities.join(",");
    setSearchParams(queryParams);
  };

  useEffect(() => {
    const queryTitle = searchParams.get("title");
    const queryGender = searchParams.get("gender");
    const querySelectedCities = searchParams.get("selectedCities");
    if (queryTitle) setTitle(queryTitle);
    if (queryGender) setGender(queryGender);
    if (querySelectedCities) {
      const selectedCityArray = strNumArrToNumConvert(querySelectedCities.split(","));
      const updatedCities = CITIES_CHECK_ARR.map((city) => {
        if (selectedCityArray.includes(city.value)) return { ...city, checked: true };
        return city;
      });
      setCities(updatedCities);
    }
  }, [searchParams, setTitle, setGender, setCities]);

  return (
    <div>
      <Header />
      <CContainer>
        <h2>muiで簡単なフォームを作成する。決定した値をクエリパラメータで保持。リロード時に値を再セットする。</h2>
        <form onSubmit={handleSubmit}>
          <p>名前</p>
          <CTextField value={title} onChange={handleTitleChange} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <FormLabel>性別選択</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleGenderChange} row>
                {GENDER_RADIO_ARR.map((item, index) => (
                  <CRadioButton key={index} label={item.label} value={item.value} />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>行ってみたい都市</FormLabel>
              <FormGroup row>
                {cities.map((city, index) => (
                  <CCheckBox key={index} label={city.label} value={city.value} checked={city.checked} onChange={() => handleCityChange(city.value)} />
                ))}
              </FormGroup>
            </FormControl>
          </div>
          <CContainedButton type="submit">決定</CContainedButton>
        </form>
      </CContainer>
    </div>
  );
};

export default ListMuiFormLayout;
