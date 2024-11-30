import getWeatherInfo from "api/openWeatherMap";
import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_WEATHER } from "./action";
import { TOKEN_OPEN_WEATHER } from "utils/constants";

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

function* fetchWeatherSaga() {
  try {
    yield put({ type: FETCH_WEATHER.REQUEST });
    const position = yield call(getCurrentPosition);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const { data } = yield call(getWeatherInfo, {
      lat,
      lon,
      appid: TOKEN_OPEN_WEATHER,
    });
    yield put({ type: FETCH_WEATHER.SUCCESS, payload: data });
    yield put({ type: FETCH_WEATHER.FINALLY });
  } catch (error) {
    if (error.message === "User denied Geolocation") {
      alert(
        "Geolocation access denied. Please allow geolocation access and reload the page."
      );
    } else {
      yield put({ type: FETCH_WEATHER.FAILURE, payload: error.message });
    }
  }
}

function* weatherSaga() {
  yield takeEvery(FETCH_WEATHER.DEFAULT, fetchWeatherSaga);
}

export default weatherSaga;
