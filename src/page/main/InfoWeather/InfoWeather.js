import React from "react";
import styled from "styled-components";

import Info from "./Info/Info";

const InfoWeatherContainer = styled.div({
  width: "100%",
});

function InfoWeather() {
  return (
    <InfoWeatherContainer>
      <Info />
    </InfoWeatherContainer>
  );
}

export default InfoWeather;
