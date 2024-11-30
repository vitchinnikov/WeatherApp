import axios from "axios";
import { put, call, delay } from "redux-saga/effects";

export function* axiosRequest(params, maxRetries = 3) {
  const { actions, method, url, headers, data } = params;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      yield put({ type: actions.REQUEST, payload: { attempt } });
      const response = yield call(axios, {
        method,
        url,
        headers,
        data,
      });

      yield put({ type: actions.SUCCESS, payload: response.data });
      return response;
    } catch (error) {
      if (attempt === maxRetries) {
        if (axios.isAxiosError(error)) {
          yield put({
            type: actions.FAILURE,
            payload: error.message,
            meta: { finalAttempt: true },
          });
        } else {
          yield put({
            type: actions.FAILURE,
            payload: "An unknown error occurred",
            meta: { finalAttempt: true },
          });
        }
        throw error;
      }
      yield delay(1000 * attempt);
    }
  }
}
