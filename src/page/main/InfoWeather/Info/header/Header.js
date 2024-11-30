import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { changeToggleAction } from "module/weather/action";
import { DEGREES, TOGGLE } from "utils/constants";
import { addTransparency } from "utils/color";
import { COLORS } from "components/theme";
import { toggleSelector } from "module/weather/selector";
import { setLocalStorage } from "utils/localStorage";

import NightCloudy from "../../../../../svg/NightCloudy";
import ToggleButton from "page/main/InfoWeather/Info/header/TempToggle";

const WrapperIcon = styled.div({
  width: 188,
  height: 146,
});
const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: 35,
});
const Temp = styled.div({
  fontSize: 20,
});

const defaultOptions = [
  {
    label: <Temp>℃</Temp>,
    value: DEGREES.CELSIUS.ID,
    selectedBackgroundColor: addTransparency(COLORS.GENERAL.WHITE, 18),
  },
  {
    label: <Temp>F</Temp>,
    value: DEGREES.FAHRENHEIT.ID,
    selectedBackgroundColor: addTransparency(COLORS.GENERAL.WHITE, 18),
  },
];
function Header() {
  const dispatch = useDispatch();
  const toggleId = useSelector(toggleSelector);

  const onChange = (newValue) => {
    dispatch(changeToggleAction(newValue));
    setLocalStorage(TOGGLE, newValue);
  };
  const backgroundColor = addTransparency(COLORS.GENERAL.WHITE, 16);
  const initialSelectedIndex = defaultOptions.findIndex(
    ({ value }) => Number(value) === Number(toggleId)
  );
  return (
    <Wrapper>
      <WrapperIcon>
        <NightCloudy />
      </WrapperIcon>
      <ToggleButton
        options={defaultOptions}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={backgroundColor}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default Header;
