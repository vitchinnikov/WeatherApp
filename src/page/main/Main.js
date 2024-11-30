import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { COLORS } from "../../components/theme";
import InfoWeather from "./InfoWeather/InfoWeather";
import { fetchWeatherAction } from "module/weather/action";
import {
  isLoadingWeatherSelector,
  isErrorWeatherSelector,
} from "module/weather/selector";
import Loader from "components/Loader";

const MainContainer = styled.div({
  background: COLORS.GRADIENT.BACKGROUND.EVENING_SUN,
  width: "100vw",
  height: "100vh",
});
const ErrorText = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: 40,
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }
  renderInfo() {
    const { isLoading, isError } = this.props;
    switch (true) {
      case isLoading:
        return <Loader />;
      case isError:
        return (
          <ErrorText>
            Sorry, something went wrong,
            <br /> try again later
            {isLoading}
            {isError}
          </ErrorText>
        );
      default:
        return <InfoWeather />;
    }
  }
  render() {
    return <MainContainer>{this.renderInfo()}</MainContainer>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: () => dispatch(fetchWeatherAction()),
  };
};
const mapStateToProps = (state) => ({
  isLoading: isLoadingWeatherSelector(state),
  isError: isErrorWeatherSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
