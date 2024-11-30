import { action, createApiActions } from "utils/actions";

export const CHANGE_TOGGLE = "CHANGE_TOGGLE";
export const FETCH_WEATHER = createApiActions("FETCH_WEATHER");

export const fetchWeatherAction = () => action(FETCH_WEATHER.DEFAULT);
export const changeToggleAction = (payload) =>
  action(CHANGE_TOGGLE, { payload });
