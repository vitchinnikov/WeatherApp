import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { COLORS } from "components/theme";
import { addTransparency } from "utils/color";
import WindIcon from "svg/WindIcon";
import HumIcon from "svg/HumIcon";
import RainIcon from "svg/RainIcon";
import {
  tempSelector,
  toggleSelector,
  windSpeedSelector,
  humiditySelector,
  rainSelector,
  snowSelector,
} from "module/weather/selector";
import { convertTemperature } from "utils/helper";
import { DEGREES } from "utils/constants";
import { find, map } from "lodash";

const { BLACK, WHITE } = COLORS.GENERAL;
const Wrapper = styled.div({});
const Temp = styled.div({
  fontSize: 164,
  fontWeight: 100,
  position: "relative",
  width: "fit-content",
  paddingBottom: 17,
  filter: `drop-shadow(-4.51px 2.26px 0.75px ${addTransparency(BLACK, 15)})`,
});
const DateWrapper = styled.div({
  fontSize: 36,
  fontWeight: 300,
  position: "relative",
  filter: `drop-shadow(-4.51px 2.26px 0.75px ${addTransparency(BLACK, 15)})`,
});
const DayWeekAndTime = styled.div({
  fontSize: 24,
  fontWeight: 300,
  position: "relative",
  filter: `drop-shadow(-4.51px 2.26px 0.75px ${addTransparency(BLACK, 15)})`,
});

const TempMeasurement = styled.div({
  fontSize: 32,
  fontWeight: 300,
  position: "absolute",
  top: 0,
  right: "-30px",
  filter: `drop-shadow(-4.51px 2.26px 0.75px ${addTransparency(BLACK, 15)})`,
});
const Other = styled.div({
  marginTop: 40,
  display: "flex",
  svg: {
    width: 22,
    height: 22,
    marginRight: 11,
  },
  "@media (max-width: 500px)": {
    display: "block",
  },
});
const Section = styled.div({
  display: "flex",
  filter: `drop-shadow(-4.51px 2.26px 0.75px ${addTransparency(BLACK, 15)})`,
  padding: "0 27px 0 27px",
  borderRight: `1px solid ${WHITE}`,
  "&:first-child": {
    padding: "0 27px 0 0",
  },
  "&:last-child": {
    borderRight: `none`,
  },
  " @media (max-width: 500px)": {
    borderRight: `none`,
    padding: "10px 27px 0 0",
  },
});

function Body() {
  const tempKelvin = useSelector(tempSelector);
  const toggle = useSelector(toggleSelector);
  const windSpeed = useSelector(windSpeedSelector);
  const rain = useSelector(rainSelector);
  const snow = useSelector(snowSelector);
  const humidity = useSelector(humiditySelector);
  const degree = find(DEGREES, (degree) => degree.ID === Number(toggle));
  const temp = convertTemperature(tempKelvin)[degree?.name];
  const tempMeasurement = degree.ID === 1 ? "℃" : "F";

  const currentDate = new Date();
  const optionsDate = { day: "numeric", month: "short", year: "2-digit" };
  const formattedDate = currentDate
    .toLocaleDateString("en-US", optionsDate)
    .replace(",", "");
  const optionsWeekday = { weekday: "long" };
  const dayOfWeek = currentDate.toLocaleDateString("en-US", optionsWeekday);
  const optionsTime = { hour: "numeric", minute: "numeric", hour12: false };
  const formattedTime = currentDate.toLocaleTimeString("en-US", optionsTime);

  return (
    <Wrapper>
      <Temp>
        {temp}
        <TempMeasurement>{tempMeasurement}</TempMeasurement>
      </Temp>
      <DateWrapper>{formattedDate}</DateWrapper>
      <DayWeekAndTime>{`${dayOfWeek} | ${formattedTime}`}</DayWeekAndTime>
      <Other>
        <Section>
          <WindIcon />
          {`Wind : ${windSpeed} m/s`}
        </Section>
        <Section>
          <HumIcon />
          {` Hum : ${humidity} %`}
        </Section>
        {rain && (
          <Section>
            <RainIcon />
            {`Rain : ${rain} mm/h`}
          </Section>
        )}
        {snow && (
          <Section>
            <RainIcon />
            {`Snow : ${snow} mm/h`}
          </Section>
        )}
      </Other>
    </Wrapper>
  );
}

export default Body;
