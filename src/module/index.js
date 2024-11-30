import { fork, all } from "redux-saga/effects";

import weatherSaga from "./weather/saga";

export default function* root() {
  try {
    yield all([fork(weatherSaga)]);
  } catch (e) {
    console.error(e);
  }
}
